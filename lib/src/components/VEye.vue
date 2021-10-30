<script>
/**
 * An individual switch that can work within a team when managed.
 */
import { VPrimitive, asTemplate } from "./VPrimitive";

export default {
  name: "VEye",
  inject: {
    manager: {
      default: null
    }
  },
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
  data() {
    return {
      internalActive: this.active
    };
  },

  computed: {
    $_uid() {
      return this.uid === null || this.uid === undefined
        ? `v-eye-${this._uid}`
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

    /**
     * Provided via slot-scope or injection
     */
    api() {
      return {
        isActive: this.$_active,
        toggle: this.toggle
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
      this.manager.track(this.$_uid, this.$el);
    }

    if (!this.$_independent && this.active !== false) {
      console.log(`
        This eye can't control himself, it's under manager scope.
        The prop has no effect
      `);
    }
  },

  beforeDestroy() {
    if (!this.$_independent) {
      this.manager.untrack(this.$_uid);
    }
  },

  methods: {
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

  render(h) {
    const attrs = {
      "data-active": this.$_active ? "" : null,
      "data-uid": this.$_uid
    };

    return h(
      VPrimitive,
      { props: { asTemplate: this.asTemplate } },
      this.$scopedSlots.default({
        ...this.api,
        attrs
      })
    );
  },

  provide() {
    return {
      eye: this
    };
  }
};
</script>
