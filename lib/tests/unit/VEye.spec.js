import { mount } from "@vue/test-utils";
import { VEye } from "@/components";
import EyeSlotMock from "./__mocks__/EyeSlotMock.vue";

describe("VEye.vue", () => {
  const wrapper = mount(VEye, {
    propsData: { uid: "mock-id" },
    scopedSlots: {
      default({ isOpen, toggle }) {
        return this.$createElement(EyeSlotMock, {
          props: { isOpen },
          on: { "mock-click": toggle }
        });
      }
    }
  });

  describe("when un-managed (independent)", () => {
    it("boo", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
