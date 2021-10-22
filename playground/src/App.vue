<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />

    <div class="wrapper">
      <raw-demo class="mb-10" />
      <tabs-demo class="mb-10" />
      <disclosure-demo />
    </div>
  </div>
</template>

<script>
import { TabsDemo, DisclosureDemo, RawDemo } from './demos'

export default {
  name: "App",
  components: {
    TabsDemo,
    RawDemo,
    DisclosureDemo
  }
}
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  text-align: left;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.button {
  @apply font-sans bg-gray-700 p-1 px-2 rounded-lg whitespace-nowrap relative font-semibold;
  @apply hover:bg-gray-800;
}
</style>
