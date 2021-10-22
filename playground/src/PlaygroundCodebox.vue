<template>
  <pre class="playground-codebox"><code><slot /></code></pre>
</template>

<script>
export default {
  name: 'PlaygroundCodebox'
}
</script>

<style lang="postcss">
.playground-codebox {
  @apply rounded-lg bg-black bg-opacity-75 font-mono text-white p-4 text-sm;
}
</style>