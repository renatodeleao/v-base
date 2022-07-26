<script setup>
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { VEyeManager, VEye, VEyeContent, VEyeSwitch } from 'v-eye'

let active = ref(2)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <v-eye-manager v-model="active" :default-active="2" :multiple="false" :mandatory="true">
    <v-eye :uid="1">
      <v-eye-switch>Summary toggler</v-eye-switch>
      <v-eye-content>Details</v-eye-content>
    </v-eye>
    <v-eye :uid="2">
      <v-eye-switch>Summary toggler</v-eye-switch>
      <v-eye-content>Details</v-eye-content>
    </v-eye>
  </v-eye-manager>

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
