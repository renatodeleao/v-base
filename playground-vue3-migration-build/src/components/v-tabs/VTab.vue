<template>
  <v-eye
    v-bind="vEyeProps"
    #default="{ isActive: isActiveEye, toggle }"
    ref="eye"
    as-template
  >
    <component
      :is="routerLink ? 'router-link' : 'fake-fragment'"
      #default="{ href, navigate, isActive: isActiveRoute, isExactActive } = {}"
      :to="$attrs.to"
      custom
    >
      <component
        v-bind="{
          'aria-selected': (isActiveRoute || isActiveEye) || null,
          'aria-current': isExactActive ? 'page' : null,
          href
        }"
        :is="computedTag"
        ref="element"
        :class="['v-tab', (isActiveRoute || isActiveEye) && 'is-selected']"
        @click="handleClick($event, toggle, navigate)"
        @keydown.enter.prevent="unaccessibleTag ? handleClick($event, toggle, navigate) : null"
        @keydown.space.prevent="unaccessibleTag ? handleClick($event, toggle, navigate) : null"
      >
        <span
          class="v-tab__text"
        >
          <slot />
        </span>
      </component>
    </component>
  </v-eye>
</template>

<script>
import { VEye } from 'v-eye'
import FakeFragment from '../FakeFragment.js'

const { active, uid, ...restVEyeProps } = VEye.props
export const VTAB_TAGS = ['a', 'button', 'div']

export default {
  name: 'VTab',
  components: { VEye, FakeFragment },
  inheritAttrs: false,
  props: {
    ...restVEyeProps,
    /**
     * When used within VTabs, this is what will be used as modelValue
     * when selected. An auto-generated value will be used if omitted.
     */
    value: uid,
    /**
     * Convenience to keep mathcing previous implementation
     */
    selected: active,
    /**
     * Some specific tags are allowed to better suit functionality
     * per component usage case.
     * `['a', 'button', 'div']`
     */
    tag: {
      type: String,
      default: 'div',
      validator: (tag) => VTAB_TAGS.includes(tag)
    }
  },
  computed: {
    vEyeProps() {
      return {
        active: this.selected,
        uid: this.value
      }
    },
    anchorLink() {
      return this.$attrs.href
    },
    computedAttrs() {
      // eslint-disable-next-line
      const { to, exact, ...restAttrs } = this.$attrs

      if (this.computedTag === 'a') return restAttrs

      return {
        ...restAttrs,
        role: 'tab',
        tabindex: '0'
      }
    },
    /**
     * Conditional tag prop assignment depending of some specific scenarios
     * where a specific tag is required.
     */
    computedTag() {
      if (this.routerLink || this.anchorLink) {
        return 'a'
      } else {
        return this.tag
      }
    },
    hasBeforeSlot() {
      return this.$scopedSlots.before
    },
    hasAfterSlot() {
      return this.$scopedSlots.after
    },
    routerLink() {
      return this.$attrs.to
    },
    slotContentClassNames() {
      return { isIcon: 'v-tab__icon' }
    },
    unaccessibleTag() {
      return !this.routerLink && !this.anchorLink && this.tag !== 'button'
    }
  },
  /**
   * When active state is controlled by vue-router, we need to notify VTabs
   * (VEyeMananger) the active route changes on the following situations:
   *  1. the initially active route (mounted + immediate).
   *  1. on programmatic navigation via $router instance methods
   *
   * The remaining cases are handled by @click event on the actual tab.
   *
   * @todo @renatodeleao assert if this can be supported out of the box by
   * v-eye package.
   */
  mounted() {
    this.$watch('$route.path', {
      handler: this.setActiveFromRouter,
      immediate: true
    })
  },
  methods: {
    handleClick(event, vEyeToggle, navigate) {

      vEyeToggle()
      navigate?.(event)
    },
    async setActiveFromRouter(newVal, oldVal) {
      await this.$nextTick()
      if (
        newVal !== oldVal &&
        this.$refs.element.getAttribute('aria-selected')
      ) {
        this.$refs.eye.toggle()
      }
    }
  }
}
</script>

<style lang="scss">
/*--------------------------------------------------------------
TABLE OF CONTENTS:
----------------------------------------------------------------
1.0 Base Styles
2.0 Body
3.0 Themes
--------------------------------------------------------------*/

/*--------------------------------------------------------------
1.0 Base Styles
--------------------------------------------------------------*/

$gleam-spacing-unit: 4px;

.v-tab {
  position: relative;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  text-decoration: none;

  color: grey;

  font-size: 13px;
  font-weight: 500;

  &, & * { box-sizing: border-box }
}

.v-tab__before,
.v-tab__after {
  display: flex;
  overflow: hidden;
  align-items: center;
  flex: none;
  justify-content: center;

  background-clip: content-box;

  line-height: 0;

  //.v-tab__before .v-tab__icon,
  //.v-tab__after .v-tab__icon
  .v-tab__icon {
    width: $gleam-spacing-unit*5;
    height: $gleam-spacing-unit*5;
    margin-top: 0;

    font-size: $gleam-spacing-unit*5;

    //.v-tab__before .v-tab__icon.v-icon--fa,
    //.v-tab__after .v-tab__icon.v-icon--fa
    &.v-icon--fa {
      width: initial;
      height: initial;

      font-size: $gleam-spacing-unit*4;
    }
  }
}

.v-tab__before {
  margin-right: $gleam-spacing-unit*2;
}

.v-tab__after {
  margin-left: $gleam-spacing-unit*2;
}

.v-tab__text {
  white-space: nowrap;
}
</style>
