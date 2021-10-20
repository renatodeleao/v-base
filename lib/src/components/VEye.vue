<script>
/**
 * Opens and closes, revealing its content.
 */
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
    as: {
      type: String,
      default: "template"
    },
    /**
     * when used inside a pack, you better use this
     * to know who is who in the v-model, otherwise
     * you'll get vue's uid
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
    }
  },

  watch: {
    active(isActive) {
      this.internalActive = isActive;
    }
  },

  created() {
    if (!this.$_independent) {
      this.manager.track(this.$_uid);
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
    if (this.as === "template") {
      return this.$scopedSlots.default({
        isActive: this.$_active,
        toggle: this.toggle
      });
    } else {
      return h(
        this.as,
        { attrs: { active: this.$_active ? "" : null } },
        this.$slots.default
      );
    }
  },

  provide() {
    return {
      eye: this
    };
  }
};
</script>
