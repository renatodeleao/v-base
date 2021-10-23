<template>
  <div class="c-disclosure-content" v-show="eye.$_active">
    <slot v-bind="{ isActive: eye.$_active, toggle: eye.toggle }" />
  </div>
</template>

<script>
export default {
  name: "VDisclosureContent",
  inject: ["eye"]
};
</script>

<style lang="postcss">
.c-disclosure-content {
  @apply relative p-3 bg-black bg-opacity-30 rounded-lg rounded-t-none text-white;
}
</style>
