<template>
  <v-eye
    :active="selected"
    v-bind="$props"
    as-template
    #default="{ isActive, toggle, attrs }"
  >
    <router-link
      :to="$attrs.to"
      v-if="isRouterLink"
      v-slot="{ href, navigate }"
    >
      <a
        class="c-tab"
        :class="isActive && 'c-tab--is-active'"
        :href="href"
        v-bind="{...componentAttrs, ...attrs }"
        @click="onClick($event, navigate, toggle)"
      >
        <slot />
      </a>
    </router-link>
    <component
      v-else
      :is="component"
      class="c-tab"
      :class="isActive && 'c-tab--is-active'"
      :aria-selected="isActive ? 'true' : null"
      v-bind="componentAttrs"
      @click="toggle"
    >
      <slot />
    </component>
  </v-eye>
</template>

<script>
import { VEye } from "v-eye";

const { active, ...restEyeProps } = VEye.props;

export default {
  name: "VTab",
  components: { VEye },
  inheritAttrs: false,
  props: {
    ...restEyeProps,
    selected: active
  },
  computed: {
    isRouterLink() {
      return !!this.$attrs.to
    },
    componentEvent() {
      return this.isRouterLink ? 'click' : null
    },
    component() {
      if (this.isRouterLink) {
        return 'router-link'
      } else if (this.$attrs.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
    componentAttrs() {
      if (this.component === 'button') {
        return {
          type: "button",
          role: "tab",
          ...this.$attrs
        }
      }

      return this.$attrs
    }
  },
  methods: {
    onClick(e, navigate, toggle) {
      console.log('VTab:onClick')
      navigate(e);
      toggle()
    }
  }
};
</script>

<style lang="postcss">
.c-tab {
  @apply w-full py-2.5 text-sm text-center leading-5 font-medium rounded-lg ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 text-green-100;
  @apply focus:outline-none focus:ring-2;
  @apply hover:bg-white hover:bg-opacity-20 hover:text-white;
}

.c-tab--is-active {
  @apply w-full py-2.5 text-sm leading-5 font-medium text-green-700 rounded-lg ring-offset-2 ring-offset-green-400  ring-white ring-opacity-60 shadow;
  @apply focus:outline-none focus:ring-2;
  @apply bg-white hover:bg-white hover:text-green-700;
}
</style>
