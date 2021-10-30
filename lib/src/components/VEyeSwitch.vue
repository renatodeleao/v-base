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
import { VPrimitive, asTemplate } from './VPrimitive'

export default {
  name: "VEyeSwitch",
  components: { VPrimitive },
  inject: ["eye"],
  props: {
    asTemplate
  }
};
</script>
