import { isVue3, useSlots } from "../utils";
import { h } from "vue";

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
  render() {
    const $slots = useSlots(this);
    if (this.asTemplate) {
      return $slots.default();
    } else if (isVue3) {
      return h(this.tagName, $slots.default());
    } else {
      return h(this.tagName, { on: this.$listeners }, $slots.default());
    }
  }
};
