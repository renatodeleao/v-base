<template>
  <v-primitive
    v-bind="{
      asTemplate,
      tagName: 'button',
      type: 'button'
    }"
    @click="eye.api.toggle"
  >
    <slot v-bind="eye.api" />
  </v-primitive>
</template>

<script>
import { VPrimitive, asTemplate } from "./VPrimitive";

export default {
  compatConfig: {
    MODE: 3, // opt-in to Vue 3 if in compat mode
    RENDER_FUNCTION: false,
    INSTANCE_SCOPED_SLOTS: false
  },
  name: "VEyeSwitch",
  components: { VPrimitive },
  inject: ["eye"],
  props: {
    asTemplate
  }
};
</script>
