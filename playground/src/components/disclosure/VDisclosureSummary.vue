<template>
  <button
    type="button"
    class="c-disclosure-summary"
    :class="eye.$_active && 'c-disclosure-summary--is-active'"
    @click="eye.toggle"
  >
    <span class="flex-1 flex align-middle">
      <span class="flex-1">
        <slot v-bind="{ isActive: eye.$_active }" />
      </span>
      <span class="flex-none">{{ eye.$_active ? "⬆️" : "⬇️" }}</span>
    </span>
  </button>
</template>

<script>
export default {
  name: "VDisclosureSummary",
  inject: {
    eye: {
      default: null
    }
  }
};
</script>

<style lang="postcss">
.c-disclosure-summary {
  @apply flex flex-nowrap font-semibold text-left bg-white bg-opacity-90 p-3 rounded-lg text-green-900;
  @apply hover:bg-opacity-100;
}

.c-disclosure-summary--is-active {
  @apply rounded-b-none;
}
</style>
