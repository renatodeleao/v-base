<template>
  <v-eye-manager
    v-model="modelProxy"
    mandatory
    watch-props-with-side-effects
    :default-active="defaultSelected"
    v-bind="$props"
  >
    <div
      class="c-tablist bg-green-900 bg-opacity-20"
      role="group"
      aria-orientation="horizontal"
      v-on="$attrs"
    >
      <slot />
    </div>
  </v-eye-manager>
</template>

<script>
import { VEyeManager } from "v-eye";

const { active, defaultActive, ...restEyeManagerProps } = VEyeManager.props;
export default {
  name: "VTabs",
  components: {
    VEyeManager
  },
  /**
   * I would use the default VEyeMenager props, but this is to showcase it
   * can be customized to users's existent model patterns
   */
  model: {
    event: "selected",
    prop: "selected"
  },
  inheritAttrs: false,
  props: {
    ...restEyeManagerProps,
    defaultSelected: defaultActive,
    selected: active
  },
  computed: {
    modelProxy: {
      get() {
        return this.selected;
      },
      set(val) {
        this.$emit("selected", val);
      }
    }
  }
};
</script>

<style lang="postcss">
.c-tablist {
  @apply flex p-1 space-x-1 rounded-xl;
}
</style>
