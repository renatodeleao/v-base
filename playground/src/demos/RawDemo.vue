<template>
  <section class="playground-demo-section">
    <h1 class="playground-demo-section__title">Raw Demo</h1>

    <section class="mb-6">
      <h2 class="playground-demo-section__heading">Compound components</h2>
      <v-eye class="c-eye" #default="{ isActive }">
        <v-eye-switch
          class="c-eye-header"
          :class="isActive && 'rounded-b-none'"
        >
          <span class="flex-1">Picka?</span>
          <span class="flex-none">{{ isActive ? "🙉" : "🙈" }}</span>
        </v-eye-switch>
        <v-eye-content class="c-eye-content">
          Pickaboo!
        </v-eye-content>
      </v-eye>
    </section>

    <section class="mb-6">
      <h2 class="playground-demo-section__heading">Compound components</h2>
      <v-eye class="c-eye" #default="{ isActive }">
        <v-eye-switch asTemplate #default="{ toggle }">
          <button
            class="c-eye-header"
            :class="isActive && 'rounded-b-none'"
            @click="toggle"
          >
            <span class="flex-1">Picka?</span>
            <span class="flex-none">{{ isActive ? "🙉" : "🙈" }}</span>
          </button>
        </v-eye-switch>
        <v-eye-content class="c-eye-content" keep-alive>
          Kept alive: Pickaboo!
        </v-eye-content>
      </v-eye>
    </section>

    <section>
      <h2 class="playground-demo-section__heading">Via slots</h2>
      <v-eye #default="{ isActive, toggle }">
        <div class="c-eye">
          <div
            class="c-eye-header"
            :class="isActive && 'rounded-b-none'"
            @click="toggle"
          >
            <span class="flex-1">Picka?</span>
            <span class="flex-none">{{ isActive ? "⬆️" : "⬇️" }}</span>
          </div>
          <div class="c-eye-content" v-show="isActive">
            Pickaboo!!
          </div>
        </div>
      </v-eye>
    </section>
  </section>
</template>

<script>
import { VEyeManager, VEye, VEyeSwitch, VEyeContent } from "v-eye";

export default {
  name: "RawDemo",
  components: {
    VEyeManager,
    VEye,
    VEyeSwitch,
    VEyeContent
  }
};
</script>

<style lang="postcss">
.c-eye {
  @apply relative flex flex-col rounded-lg;
}

.c-eye-header {
  @apply flex flex-nowrap text-left bg-white bg-opacity-90 p-3 rounded-lg hover:bg-opacity-100;
}

.c-eye-content {
  @apply p-3 bg-black bg-opacity-20 rounded-lg rounded-t-none;
}
</style>
