<script>
import { VPrimitive, asTemplate } from "./VPrimitive";
import { useSlots, isVue3 } from "../utils.js";
import { h } from "vue";

const isNil = val => val === undefined || val === null;
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
    asTemplate,
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
    }
  },

  data() {
    return {
      injected: [],
      injectedElMap: {},
      modelValueInternal: this.defaultActive,
      // in order for reactive props to stay reactive when provide/injected
      // because vue will create an observable
      api: {
        track: this.track,
        untrack: this.untrack,
        getIsActive: this.getIsActive,
        toggle: this.toggle
      }
    };
  },

  computed: {
    $_modelValueProxy: {
      get() {
        return this.active || this.active === 0
          ? this.serializeModelValue(this.active)
          : this.serializeModelValue(this.modelValueInternal);
      },
      set(newValue) {
        this.syncModelValue(newValue);
      }
    }
  },

  watch: {
    /**
     * When active is changed from an external source but we still want to perform
     * side-effects on the consumer
     * Ex: using vue-router, we can change the route without interacting with any
     * VTab trigger (clicking). This means regular that @change won't be triggered,
     * and thus side-effects can't be executed for that scenario when consumers need access
     * to internal apis: we could use $refs and access all this info directly but feels
     * even dirtier than this.
     *
     * @note HIGH PROBABILITY OF CHANGE
     *   This was added to perform a specific DOM related side-effect
     *   "the stalker underline" tab demo. But is it really much better than
     *   $nextTick(() => this.$el.querySelector('[data-state="selected"])?
     *
     * @note [1] do not re-emit if triggered from internal chang
     *   @see syncModelValue [1]
     */
    active() {
      // [1]
      if (this._preventActiveWatcher) {
        this._preventActiveWatcher = false;
        return;
      }

      /**
       * @emits change
       */
      this.emitModelValueWithDetails(["change"]);
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
    /* eslint-disable */
    if (
      this.multiple &&
      !isNil(this.active) && !Array.isArray(this.active) &&
      !isNil(this.defaultActive) && !Array.isArray(this.defaultActive)
    ) {
      console.warn(
        "[v-eye]: when using multiple, active/defaultActive must be an array if provided"
      );
    }

    if (this.mandatory && isNil(this.active) && isNil(this.defaultActive)) {
      console.warn(
        "[v-eye]: mandatory mode expects an not nil 'active' or 'defaultActive' value"
      );
    }
  },

  mounted() {
    /**
     * @todo it's a bit confusing but at least its clear that we have
     *  access event details
     * @example vue
     *   <!-- ❌ works but.. does not have instance context details -->
     *   <v-eye-manager @hook:mounted="handle" />
     *   <!-- ✅ -->
     *   <v-eye-manager @mounted="handle" />
     *
     * @emits mounted
     */
    this.emitModelValueWithDetails(["mounted"]);
  },

  methods: {
    syncModelValue(newVal) {
      this.modelValueInternal = newVal;

      this.emitModelValueWithDetails(["change", "update:active"], newVal);
      // [1]
      this._preventActiveWatcher = true;
    },

    /**
     * Internally we always use arrays to simplify logic
     * @param {String|null|Array} value - raw value provided by consumer
     */
    serializeModelValue(value) {
      if (Array.isArray(value)) {
        return value;
      } else if (value || value === 0) {
        return [value];
      } else {
        return [];
      }
    },
    /**
     * Internally we always use arrays to simplify logic
     * but when outputting for consumers we give them the expected type for
     * the mode: multiple => array else uid String || null (if no selection)
     */
    deserializeModelValue(serializedModelValue) {
      return this.multiple
        ? serializedModelValue
        : !serializedModelValue.length
        ? null
        : serializedModelValue[serializedModelValue.length - 1];
    },

    /**
     * Convenience wrapper that emits provided vue event names with most up-to
     * date modelValue and EventDetails object for consumer side-effects.
     *
     * @param {Array<String>} eventNames - the ones to emit with payload
     * @param {Array} newModelValue - omitting it means using currently computed
     *   this.$_modelValueProxy. Currently, raw active cannot be used because
     *   it's not coerced to internal expected representation (Array)
     */
    emitModelValueWithDetails(eventNames, newModelValue) {
      const { emitValue, details } = this.getEventParams(
        newModelValue ?? this.$_modelValueProxy
      );

      eventNames.forEach(event => this.$emit(event, emitValue, details));
    },

    /**
     * Additional information for consumers to perform model change
     * side-effects on their implementations.
     *
     * @typedef {Object} EventDetails
     * @property {Array} elements - array of tracked children dom nodes
     *
     * @param {Array} modelValue
     * @returns {EventDetails}
     */
    getEventDetails(modelValue) {
      return {
        elements: modelValue.map(uid => this.injectedElMap[uid])
      };
    },

    /**
     * Proxy to get all event emit information in a single call
     *
     * @typedef {Object} EventParams
     * @property {Array|String|Number|null} emitValue
     * @property {EventDetails} details
     *
     * @returns {EventParams}
     */
    getEventParams(modelValue) {
      return {
        emitValue: this.deserializeModelValue(modelValue),
        details: this.getEventDetails(modelValue)
      };
    },

    execMandatorySideEffects(isMandatory) {
      if (!this.watchPropsWithModelSideEffects) return;

      if (isMandatory && !this.$_modelValueProxy.length) {
        this.$_modelValueProxy = [this.injected[0]];
      }
    },
    execMultipleSideEffects(isMultiple) {
      if (!this.watchPropsWithModelSideEffects) return;

      if (!isMultiple && this.$_modelValueProxy.length > 1) {
        this.$_modelValueProxy = this.$_modelValueProxy.slice(-1);
      } else {
        this.syncModelValue(this.$_modelValueProxy);
      }
    },

    // INJECTED API

    /**
     * Keep track of eyes created inside this provider instance. (injected)
     * @param {String|Number} uid - each eye identifier
     * @param {HTMLElement} element - each eye dom node
     */
    track(uid, element) {
      if (!this.injected.includes(uid)) {
        this.injected.push(uid);
        if (isVue3) {
          this.injectedElMap[uid] = element
        } else {
          this.$set(this.injectedElMap, uid, element);
        }
      }
    },
    /**
     * Remove track of eye. In case eye is destroyed
     * @param {String|Number} uid - each eye identifier
     */
    untrack(uid) {
      this.injected = this.injected.filter(curId => uid !== curId);
      if (isVue3) {
        delete this.injectedElMap[uid]
      } else {
        this.$delete(this.injectedElMap, uid);
      }

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
          this.$_modelValueProxy = this.injected.slice(-1);
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

  render() {
    const $slots = useSlots(this)

    return h(VPrimitive, { props: { asTemplate: this.asTemplate } }, $slots.default())
  },

  provide() {
    return {
      manager: this.api
    };
  }
};
</script>
