<template>
  <v-eye-manager
    watch-props-with-side-effects
    v-bind="$props"
    @change="onChange"
  >
    <div class="c-disclosure-group" aria-orientation="vertical" v-on="$attrs">
      <slot />
    </div>
  </v-eye-manager>
</template>

<script>
import { VEyeManager } from "v-eye";

export default {
  name: "VDisclosureGroup",
  components: {
    VEyeManager
  },
  model: VEyeManager.model,
  inheritAttrs: false,
  props: {
    ...VEyeManager.props
  },
  methods: {
    onChange(...args) {
      this.$emit(VEyeManager.model.event, ...args);
    }
  }
};
</script>

<style lang="postcss">
.c-disclosure-group {
  @apply flex flex-col p-1 rounded-xl;
}

.c-disclosure-group > * + * {
  @apply mt-2;
}
</style>
