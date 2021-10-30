<template>
  <v-primitive v-if="eye.api.isActive" v-bind="{ asTemplate }">
    <slot v-bind="{ toggle: eye.api.toggle }" />
  </v-primitive>
</template>

<script>
import { VPrimitive, asTemplate } from './VPrimitive'

export default {
  name: "VEyeContent",
  components: { VPrimitive },
  inject: ["eye"],
  props: {
    asTemplate
  }
};
</script>
