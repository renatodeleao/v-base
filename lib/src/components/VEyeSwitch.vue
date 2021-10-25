<script>
export default {
  name: "VEyeSwitch",
  inject: ["eye"],
  props: {
    as: {
      type: String,
      default: "button"
    }
  },
  render(h) {
    if (this.as === "template") {
      return this.$scopedSlots.default({
        toggle: this.eye?.toggle,
        isActive: this.eye?.$_active
      });
    } else {
      return h(
        this.as,
        {
          attrs: {
            type: "button"
          },
          on: {
            click: this.eye?.toggle
          }
        },
        this.$slots.default ||
          this.$scopedSlots.default({ isActive: this.eye?.$_active })
      );
    }
  }
};
</script>
