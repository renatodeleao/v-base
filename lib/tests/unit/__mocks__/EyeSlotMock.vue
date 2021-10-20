<template>
  <div class="v-eye">
    <div class="v-eye-header" @click="$emit('mock-click')">
      <span>Free eye</span>
      <span>{{ isOpen ? "🔼" : "🔽" }}</span>
    </div>
    <div class="v-eye-content" v-show="isOpen">Boo</div>
  </div>
</template>

<script>
export default {
  props: ["isOpen"]
};
</script>
