<script>
/**
 * An individual switch that can work within a team when managed.
 */
import { VPrimitive, asTemplate } from "./VPrimitive";
import { useSlots, uniqueId, isVue3, lifecyleHooksMap } from "../utils";
import { h, ref } from "vue";

export default {
  // opt-in to Vue 3 if in compat mode
  compatConfig: {
    MODE: 3,
    RENDER_FUNCTION: false,
    INSTANCE_SCOPED_SLOTS: false
  },
  name: "VEye",
  inject: {
    manager: {
      default: null
    }
  },
  emits: ["toggle", "update:active"],
  model: {
    prop: "active",
    event: "toggle"
  },
  props: {
    asTemplate,
    /**
     * When used under manager scope, it's highly recommended to provide unique
     * value to each instance as it will act as v-model's value when active.
     * Omitting will get random generated value, which is not very useful,
     * but necessary for internal tracking logic.
     */
    uid: {
      type: [String, Number],
      default: null
    },
    /**
     * Model value. Also initial value, when used outside a pack.
     */
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const elementRef = ref(null);
    const internalActive = ref(props.active);

    return {
      elementRef,
      internalActive
    };
  },
  computed: {
    $_uid() {
      return this.uid === null || this.uid === undefined
        ? uniqueId()
        : this.uid;
    },
    $_independent() {
      return !this.manager;
    },
    $_active() {
      if (this.$_independent) {
        return this.internalActive;
      }

      return this.manager.getIsActive(this.$_uid);
    },

    $_attrs() {
      return {
        "data-v-eye-active": this.$_active ? "" : null,
        "data-v-eye-uid": this.$_uid
      };
    },

    /**
     * Provided via slot-scope or injection
     */
    api() {
      return {
        isActive: this.$_active,
        toggle: this.toggle,
        setElementRef: this.setElementRef,
        attrs: this.$_attrs
      };
    }
  },

  watch: {
    active(isActive) {
      this.internalActive = isActive;
    }
  },

  mounted() {
    if (!this.$_independent) {
      this.manager.track(this.$_uid, this.setElementRef());
    }

    if (!this.$_independent && this.active !== false) {
      console.log(`
        This eye can't control himself, it's under manager scope.
        The prop has no effect
      `);
    }
  },

  [lifecyleHooksMap.beforeUnmount]() {
    if (!this.$_independent) {
      this.manager.untrack(this.$_uid);
    }
  },

  methods: {
    // improvement: prefer template ref based approach instead.
    setElementRef(el) {
      // this function can be destructured from slot  set as :ref="setElementRef"
      if (el) {
        this.elementRef = el;
      } else {
        // good old query select if consumer bounded attrs, magical but
        // not very certain this.$el.nextElementSibling as fallback, not
        // that we can't control how many nodes the consumer renders under slot scope
        // but we can suggest in docs
        el = document.querySelector(`[data-v-eye-uid="${this.$_uid}]`);
        this.elementRef =
          el ?? (isVue3 ? this.$el.nextElementSibling : this.$el);
      }

      return this.elementRef;
    },
    toggle() {
      if (this.$_independent) {
        this.internalActive = !this.internalActive;
        this.$emit("toggle", this.internalActive);
        this.$emit("update:active", this.internalActive);
        return;
      }

      this.manager.toggle(this.$_uid);
    }
  },

  render() {
    const $slots = useSlots(this);
    const props = { asTemplate: this.asTemplate };

    return h(
      VPrimitive,
      {
        ...(isVue3 ? props : { props })
      },
      $slots.default(this.api)
    );
  },

  provide() {
    return {
      eye: this
    };
  }
};
</script>
