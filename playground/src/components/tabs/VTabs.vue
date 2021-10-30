<template>
  <v-eye-manager
    mandatory
    watch-props-with-side-effects
    :default-active="defaultSelected"
    :active="selected"
    as-template
    @change="onChange"
    @mounted="(...args) => onChange(...args, false)"
  >
    <div
      class="c-tablist bg-green-900 bg-opacity-20"
      role="group"
      aria-orientation="horizontal"
      v-on="$attrs"
    >
      <slot />

      <div class="c-tablist__selected-line" :style="selectedLineStyles" />
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

  data: () => ({
    selectedLineStyles: {
      width: '1px',
      transform: 'translateX(0)'
    }
  }),

  methods: {
    onChange(val, details, animate) {
      console.log('VTabs:onChange:', val, details.elements[0])
      this.$emit("selected", val, details.elements[0]);
      this.updateSelectedLine(details.elements[0], animate)
    },
    updateSelectedLine($el, forceAnim) {
      const animate = forceAnim ?? true
      const { width } = $el?.getBoundingClientRect() || {}
      this.selectedLineStyles.width = width + 'px'
      this.selectedLineStyles.transition = animate ? 'width 0.2s ease, transform 0.2s ease' : null
      this.selectedLineStyles.transform = `translateX(${$el?.offsetLeft}px)`
    }
  }
};
</script>

<style lang="postcss">
.c-tablist {
  @apply relative flex p-1 space-x-1 rounded-xl;
}

.c-tablist__selected-line {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 1px;
  height: 2px;

  transform-origin: 0 0;
  background-color: white;
}
</style>
