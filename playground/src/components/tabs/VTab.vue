<template>
  <v-eye
    :active="selected"
    v-bind="$props"
    as="template"
    #default="{ isActive, toggle }"
  >
    <button
      class="c-tab"
      :class="isActive && 'c-tab--is-active'"
      type="button"
      role="tab"
      :aria-selected="isActive ? 'true' : null"
      v-bind="$attrs"
      v-on="$listeners"
      @click="toggle"
    >
      <slot />
    </button>
  </v-eye>
</template>

<script>
import { VEye } from 'v-eye'

const { active, ...restEyeProps } = VEye.props

export default {
  name: 'VTab',
  components: { VEye },
  inheritAttrs: false,
  props: {
    ...restEyeProps,
    selected: active
  }
}
</script>

<style lang="postcss">
.c-tab {
  @apply w-full py-2.5 text-sm leading-5 font-medium rounded-lg ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 text-green-100;
  @apply focus:outline-none focus:ring-2;
  @apply hover:bg-white hover:bg-opacity-20 hover:text-white;
}

.c-tab--is-active {
  @apply w-full py-2.5 text-sm leading-5 font-medium text-green-700 rounded-lg ring-offset-2 ring-offset-green-400  ring-white ring-opacity-60 shadow;
  @apply focus:outline-none focus:ring-2;
  @apply bg-white hover:bg-white hover:text-green-700;
}
</style>