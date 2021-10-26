<script>
const toArrayModel = (value) => {
  if (Array.isArray(value)) {
    return value
  } else if (value || value === 0) {
    return [value]
  } else {
    return []
  }
}

/**
 * Provides state for scoped <v-eye>, so they can work as group based on
 * provider conditions (props).
 */
export default {
  name: "VEyeManager",
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    as: {
      type: String,
      default: "div"
    },
    /**
     * The controlled active state of the eyes.
     * Must be used in conjunction with v-model, manually with @change event
     * or .sync modifiers,
     */
    active: {
      type: [String, Array, Number]
    },
    /**
     * The active state when initially rendered.
     * Use when you do not need to control its active state.
     */
    defaultActive: {
      type: [String, Array, Number]
    },
    /**
     * At least one eye must be active all the time
     * Good for accordions, tabs.
     */
    mandatory: {
      type: Boolean,
      default: false
    },
    /**
     * > 1 eyes active at the same time
     * "Checkbox-or-selectobox-like" groups like filters, tags.
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Weather modelValue values should be readjusted when on of the config props
     * changes. Example: if we have multiple true and 2 items in model array,
     * if we change multiple to false model value is updated to last-item in array
     * to become single (non-multiple) model, so consistent with proposition of "multiple"
     *
     * We also do that for empty states, so if change multiple
     * vuetify as an example doesn't perform any of this side-effects
     * till the user interacts with the component. Because it'f it's controlled
     * and you change multiple to false, you should be able to decide what's the
     * one staying open as well. If using internal value, then you don't care as
     * as long as it still works (and it does after click)
     *
     * If mandatory starts at false and the is updated to true and modelValue
     * doesn't have at least one item we make the first item open to ensure that
     * mandatory promise is fulfilled
     * @see https://codepen.io/ohsimtabem/pen/zYBXWyo?editable=true&editors=101%3Dhttps%3A%2F%2Fvuetifyjs.com%2F
     */
    watchPropsWithModelSideEffects: {
      type: Boolean,
      default: false
    },
    /**
     * Removes all internal or external logic basically making this a
     * transparent static wrapper.
     * Still thinking about it because it seems to me that if we don't
     * want any modeling, than the compositions should conditionally
     * render me. But that seems more work for now.
     * @todo think about this
     */
    static: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      injected: [],
      modelValueInternal: this.defaultActive,
      // in order for reactive props to stay reactive when provide/injected
      // because vue will create an observable
      api: {
        track: this.track,
        untrack: this.untrack,
        getIsActive: this.getIsActive,
        toggle: this.toggle,
        static: this.static
      }
    };
  },

  computed: {
    $_modelValueProxy: {
      get() {
        return this.active
          ? toArrayModel(this.active)
          : toArrayModel(this.modelValueInternal);
      },
      set(newValue) {
        this.syncModelValue(newValue);
      }
    }
  },

  watch: {
    static(val) {
      this.api.static = val
    },
    mandatory: {
      immediate: true,
      handler: "execMandatorySideEffects"
    },
    multiple: {
      immediate: true,
      handler: "execMultipleSideEffects"
    }
  },

  created() {
    if (this.multiple && !Array.isArray(this.active)) {
      console.warn("when using multiple, modelValue/v-model must be an array");
    }

    if (this.mandatory && !this.active && !this.modelValueInternal) {
      console.warn("mandatory expects an initial modelValue");
    }
  },

  methods: {
    syncModelValue(newVal) {
      this.modelValueInternal = newVal;
      const emitValue = this.multiple
        ? newVal
        : !newVal.length
        ? null
        : newVal[newVal.length - 1]

      this.$emit("change", emitValue);
      this.$emit("update:modelValue", emitValue);
    },
    execMandatorySideEffects(isMandatory) {
      if (!this.watchPropsWithModelSideEffects) return;

      if (isMandatory && !this.$_modelValueProxy.length) {
        this.$_modelValueProxy = [this.injected[0]]
      }
    },
    execMultipleSideEffects(isMultiple) {
      if (!this.watchPropsWithModelSideEffects) return;

      if (!isMultiple && this.$_modelValueProxy.length > 1) {
        this.$_modelValueProxy = this.$_modelValueProxy.slice(-1)
      } else {
        this.syncModelValue(this.$_modelValueProxy)
      }
    },

    // INJECTED API

    /**
     * Keep track of eyes created inside this provider instance. (injected)
     * @param {String|Number} uid - each eye identifier
     */
    track(uid) {
      if (!this.injected.includes(uid)) {
        this.injected.push(uid);
      }
    },
    /**
     * Remove track of eye. In case eye is destroyed
     * @param {String|Number} uid - each eye identifier
     */
    untrack(uid) {
      this.injected = this.injected.filter(curId => uid !== curId);

      if (this.getIsActive(uid)) {
        this.deactivate(uid, true);
      }
    },
    /**
     * Check current injected eye open state
     * @param {String|Number} uid - each eye identifier
     * @return {Boolean}
     */
    getIsActive(uid) {
      return this.$_modelValueProxy.includes(uid);
    },

    activate(uid) {
      if (this.multiple) {
        this.$_modelValueProxy = [...this.$_modelValueProxy, uid];
      } else {
        this.$_modelValueProxy = [uid];
      }
    },

    deactivate(uid, destroyed = false) {
      if (
        this.multiple &&
        !(this.mandatory && this.$_modelValueProxy.length === 1)
      ) {
        this.$_modelValueProxy = this.$_modelValueProxy.filter(
          el => el !== uid
        );
      } else {
        if (destroyed && this.mandatory) {
          this.$_modelValueProxy = this.injected.slice(-1)
        }
        // if multiple are open, and we were have current multiple-like state, keep it open
        // and close the other ones. this is inspired by vuetify behaviour, and since they
        // are the major library out there, i'll trust that it reflects the will of the
        // majority of devs

        if (this.$_modelValueProxy.length > 1) {
          this.$_modelValueProxy = [uid];
        } else if (!this.mandatory) {
          this.$_modelValueProxy = [];
        }
      }
    },
    /**
     * Toggle injected eye active state depending on current manager "mode"
     * @param {String|Number} uid - each eye identifier
     */
    toggle(uid) {
      const isActive = this.getIsActive(uid);

      if (isActive) {
        this.deactivate(uid);
      } else {
        this.activate(uid);
      }
    }
  },

  render(h) {
    // mostly because of jest, other wise would be regular slot
    return this.as === "template"
      ? this.$scopedSlots.default({})
      : h(this.as, this.$slots.default);
  },

  provide() {
    return {
      manager: this.api
    };
  }
};
</script>
