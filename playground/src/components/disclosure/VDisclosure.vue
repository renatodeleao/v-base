<template>
  <v-eye
    v-model="modelValueProxy"
    v-bind="$props"
    as="template"
    #default="{ isActive, toggle }"
  >
    <div class="c-disclosure" :open="isActive ? '' : null">
      <slot v-bind="{ isActive, toggle }" />
    </div>
  </v-eye>
</template>

<script>
import { VEye } from 'v-eye'
const { active, ...restEyeProps } = VEye.props

export default {
  name: 'VDisclosure',

  components: {
    VEye
  },
  model: {
    prop: 'open',
    event: 'toggle'
  },
  props: {
    ...restEyeProps,
    open: active
  },
  computed: {
    modelValueProxy: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('toggle', value)
        this.$emit('update:open', value)
      }
    }
  }
}
</script>

<style lang="postcss">
.c-disclosure {
  @apply flex flex-col;
}
</style>