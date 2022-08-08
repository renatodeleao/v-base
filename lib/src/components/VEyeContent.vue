<template>
  <v-primitive v-if="eye.api.isActive" v-bind="{ asTemplate }">
    <slot v-bind="{ toggle: eye.api.toggle }" />
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
  name: "VEyeContent",
  components: { VPrimitive },
  inject: ["eye"],
  props: {
    asTemplate
  }
};
</script>
