<template>
  <div class="v-eye">
    <div class="v-eye-header" @click="$emit('header-click')">
      <span>Title {{ title }}</span>
      <span>{{ isOpen ? '🔼': '🔽' }}</span>
    </div>
    <div class="v-eye-content" v-show="isOpen">
      <slot>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        finibus auctor massa, vitae posuere sem tincidunt eget. Duis non
        vestibulum diam. Pellentesque eleifend interdum mollis. Donec
        porttitor dui enim. Maecenas a semper sem. Nunc molestie turpis
        vitae sem auctor, non venenatis velit ultricies.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MockEyeSlotComponent',
  props: ['isOpen', 'title']
}
</script>

<style lang="scss">
.v-eye-header,
.v-eye-content {
  padding: 10px;
  background: whitesmoke;
  margin: 4px;
  color: black;
}

.v-eye-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: lightgrey; 
    cursor: pointer;
  }
}

.v-eye-content {
  background: rgba(black, 0.5);
  color: white;
}
</style>