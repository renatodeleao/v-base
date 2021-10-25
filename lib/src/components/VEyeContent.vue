<script>
export default {
  name: "VEyeContent",
  inject: ["eye"],
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render(h) {
    if (this.as === "template") {
      return this.$scopedSlots.default({
        toggle: this.eye?.toggle
      });
    } else {
      return this.eye?.$_active
        ? h(
            this.as,
            this.$slots.default ||
              this.$scopedSlots.default({
                toggle: this.eye?.toggle
              })
          )
        : null;
    }
  }
};
</script>
