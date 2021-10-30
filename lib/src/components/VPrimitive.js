/**
 * Reusable primitive prop. Every component with support for template
 * slot should include it.
 */
export const asTemplate = {
  type: Boolean,
  default: false
};

/**
 * Conditionally render the appropriate skeleton element or the slot
 * content in case consumer wants to provide their own implementation
 * via a truthy asTemplate. No prop merging happens, bindings will be
 * fully exposed via slot-scope.
 *
 * @private - this is for internal lib use only.
 */
export const VPrimitive = {
  name: "VPrimitive",
  props: {
    asTemplate,
    tagName: {
      type: String,
      default: "div"
    }
  },
  render(h) {
    if (this.asTemplate) {
      return this.$slots.default;
    } else {
      return h(this.tagName, { on: this.$listeners }, this.$slots.default);
    }
  }
};
