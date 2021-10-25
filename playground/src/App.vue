<template>
  <div id="app" class="playground-demo-section">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
    {{ currentTab }} {{ reactiveStatic }}
    <button @click="reactiveStatic = !reactiveStatic">reactive static</button>
    <v-tabs as="div" id="nav" :static="reactiveStatic">
      <v-tab
        v-for="tab in tabs"
        :key="tab.routeObject.name"
        :to="tab.routeObject"
        exact-path
        :selected="tab.resolvedRoutePath === $route.path"
      >
        {{ tab.label }}
      </v-tab>
    </v-tabs>

    <router-link to="/" exact-path>Home</router-link>
    <router-link to="/about?q=s" exact-path>About With Query params</router-link>

    <div class="wrapper">
      <raw-demo class="mb-10" />
      <tabs-demo class="mb-10" />
      <disclosure-demo />
    </div>

    <router-view />
  </div>
</template>

<script>
import { TabsDemo, DisclosureDemo, RawDemo } from './demos'
import { VTabs, VTab } from '@/components'

export default {
  name: "App",
  components: {
    TabsDemo,
    RawDemo,
    DisclosureDemo,
    VTabs,
    VTab
  },
  data() {
    return {
      currentTab: null,
      reactiveStatic: true
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler(val) {
        this.currentTab = val
      }
    }
  },
  computed: {
    tabs() {
      return [{ name: 'Home' }, { name: 'About' }].map(route => {
        return {
          label: route.name,
          resolvedRoutePath: this.$router.resolve(route).href,
          routeObject: route
        }
      })
    }
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

.router-link-active {
  color: orange;
}

.router-link-exact-path-active {
  color: lime
}
</style>
