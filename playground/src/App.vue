<template>
  <div id="app" class="playground-demo-section">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />

    <playground-codebox>
      curRoute: {{ routePathInitiallyMatchingLocation }}
    </playground-codebox>
    <input v-model="q" />
    <v-tabs as="div" v-model="routePathInitiallyMatchingLocation">
      <v-tab
        v-for="tab in tabs"
        :key="tab.routeObject.name"
        :to="tab.routeObject"
        :uid="tab.resolvedRoutePath"
        exact-path
      >
        {{ tab.label }} {{ tab.resolvedRoutePath }}
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
// const curRoutePath = useRoutePathInitiallyMatchingLocation()
import { TabsDemo, DisclosureDemo, RawDemo } from './demos'
import { VTabs, VTab } from '@/components'
import PlaygroundCodebox from './PlaygroundCodebox'

export default {
  name: "App",
  components: {
    TabsDemo,
    RawDemo,
    DisclosureDemo,
    VTabs,
    VTab,
    PlaygroundCodebox
  },
  data() {
    return {
      q: '',
      // prevents first reactive update, since $route.path always starts as root "/"
      routePathInitiallyMatchingLocation: window.location.pathname
    }
  },
  watch: {
    '$route.path': {
      handler(val) {
        this.routePathInitiallyMatchingLocation = val
      }
    },
    q(val) {
      this.$router.replace({ query: { q: val }})
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
  },

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
