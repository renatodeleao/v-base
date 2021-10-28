<template>
  <section class="playground-demo-section">
    <h1 class="playground-demo-section__title">Tabs</h1>

    <section class="mb-8">
      <h2 class="playground-demo-section__heading">Controlled</h2>
      <v-tabs v-model="model" @selected="handleSelected">
        <v-tab v-for="tab in tabs" :key="tab" :uid="tab">
          {{ tab }}
        </v-tab>
      </v-tabs>
      <pre
        class="playground-codebox mt-2"
      ><code>v-model: {{ model }}</code></pre>
    </section>

    <section class="mb-8">
      <h2 class="playground-demo-section__heading">
        Uncontrolled (no v-model, internal state)
      </h2>
      <v-tabs :default-selected="tabs[1]">
        <v-tab
          v-for="tab in tabs"
          :key="tab"
          :uid="tab"
          @click.native="doSomething"
        >
          {{ tab }}
        </v-tab>
      </v-tabs>
    </section>

    <section>
      <h2 class="playground-demo-section__heading">Raw</h2>
      <v-eye-manager
        as="div"
        v-model="model"
        :default-active="'Recent'"
        mandatory
        watch-props-with-side-effects
        class="c-tablist bg-blue-900 bg-opacity-20 "
        role="group"
        aria-orientation="horizontal"
      >
        <v-eye
          v-for="(tab, i) in tabs"
          :key="tab"
          :uid="tab"
          as="template"
          #default="{ isActive, toggle }"
        >
          <button
            class="c-tab"
            :class="isActive && 'c-tab--is-active'"
            type="button"
            role="tab"
            :aria-selected="isActive ? 'true' : null"
            tabindex="0"
            @click="toggle"
          >
            {{ tab }}
          </button>
        </v-eye>
      </v-eye-manager>
    </section>
  </section>
</template>

<script>
import { VEyeManager, VEye } from "v-eye";
import { VTabs, VTab } from "@/components";

const TABS = ["Recent", "Popular", "Trending"];

export default {
  name: "TabsDemo",
  components: {
    VEyeManager,
    VEye,
    VTabs,
    VTab
  },
  data: () => ({
    model: TABS[0],
    tabs: [...TABS]
  }),
  methods: {
    doSomething() {
      alert(`If you're using me as menu after page load or something`);
    },
    handleSelected(modelVal, el) {
      console.log('handle', modelVal, el)
    }
  }
};
</script>
