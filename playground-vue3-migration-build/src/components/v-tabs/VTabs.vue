<template>
  <v-eye-manager
    as-template
    mandatory
    :default-active="defaultSelected"
    :active="selected"
    @change="onChange"
    @mounted="(...args) => onChange(...args, true)"
  >
    <div
      v-bind="$attrs"
      role="tablist"
      :class="classNames"
    >
      <slot />
      <div
        v-if="body === 'text'"
        class="v-tabs__selected-line"
        :style="textLineStyles"
      />
    </div>
  </v-eye-manager>
</template>

<script>
import { VEyeManager } from 'v-eye'

const { active, defaultActive, ...restEyeManagerProps } = VEyeManager.props

export const VTABS_BODIES = ['text', 'flat', 'flat-boxed', 'ghost']
export const VTABS_SPACINGS = ['none', 's', 'm', 'l']
export const VTABS_THEMES = ['primary', 'grey']

export default {
  name: 'VTabs',
  components: { VEyeManager },
  inheritAttrs: false,
  model: {
    event: 'update:selected',
    prop: 'selected'
  },
  props: {
    ...restEyeManagerProps,
    /**
     * Layout of each tab item in terms of body format.
     * `['flat', 'text', 'ghost']`
     */
    body: {
      type: String,
      default: 'text',
      validator: (v) => VTABS_BODIES.includes(v)
    },
    /**
     * The active state when initially rendered.
     * Use when you do not need to control its active state.
     */
    defaultSelected: defaultActive,
    /**
     * The controlled active state of the eyes.
     * Must be used in conjunction with v-model, manually with @selected event
     * or .sync modifiers,
     */
    selected: active,
    /**
     * Uses t-shirt size methaphor to determine
     * the spacing between tabs children.
     * `['s', 'm', 'l']`
     */
    spacing: {
      type: String,
      default: 'l',
      validator: (v) => VTABS_SPACINGS.includes(v)
    },
    /**
     * Coloring of each tab item.
     * `['primary', 'grey']`
     */
    theme: {
      type: String,
      default: 'primary',
      validator: (v) => VTABS_THEMES.includes(v)
    }
  },
  data() {
    return {
      isDestroying: false,
      currentTabElement: null,
      textLineStyles: {
        width: '1px',
        transform: 'translateX(0)'
      }
    }
  },
  computed: {
    classNames() {
      return {
        'v-tabs': true,
        [`v-tabs--${this.body}`]: this.body,
        [`v-tabs--${this.spacing}`]: this.spacing,
        [`v-tabs--${this.theme}`]: this.theme
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateSelectedLine)
  },
  beforeUnmount() {
    this.isDestroying = true
    window.removeEventListener('resize', this.updateSelectedLine)
  },
  methods: {
    /**
     * @note [1] Do not forward first mounted model change
     *   it's only used for dom side-effects, as in, animate the line
     *   on default selection. Note that mounted flag it's undefined by
     *   default so negating will turn to true.
     *
     * @note [2] An unwanted event emits during the destruction of the component.
     */
    onChange(val, details, mounted) {
      this.currentTabElement = details.elements[0]
      console.log(this.currentTabElement)
      // [1][2]
      if (mounted !== true && !this.isDestroying) {
        this.$emit(this.$options.model.event, val, details)
      }
      this.updateSelectedLine(null, !mounted)
    },
    /**
     * @param {Event} event - a function ref is used on resize handler
     *   which binds Event as first argument. List for convenience.
     * @param {Boolean|undefined} animateFlag - if undefined uses default (true)
     *  used for prevent initial animation on component mount.
     */
    updateSelectedLine(_event, animateFlag) {
      if (this.body !== 'text') return

      const $el = this.currentTabElement
      const animate = animateFlag ?? true
      const { width } = $el?.getBoundingClientRect() || {}

      this.textLineStyles.width = width + 1 + 'px'
      this.textLineStyles.transition = animate ? 'width 0.2s ease, transform 0.2s ease' : null
      this.textLineStyles.transform = `translateX(${$el?.offsetLeft}px)`
    }
  }
}
</script>

<style lang="scss">
/*--------------------------------------------------------------
TABLE OF CONTENTS:
----------------------------------------------------------------
0.0 Settings
1.0 Base Styles
2.0 Spacings
3.0 Bodies
4.0 Themes
--------------------------------------------------------------*/

/*--------------------------------------------------------------
0.0 Settings
--------------------------------------------------------------*/

$gleam-spacing-unit: 4px;

$v-tabs-spacings: (
  'none': 0px,
  's': $gleam-spacing-unit,
  'm': $gleam-spacing-unit*3,
  'l': $gleam-spacing-unit*6,
);
$v-tabs-themes: ('primary','grey');

$v-tab-radius: 8px;
$v-tab-ghost-border-width: 1px;

/*--------------------------------------------------------------
1.0 Base Styles
--------------------------------------------------------------*/

.v-tabs {
  position: relative;

  display: inline-flex;

  user-select: none;
  appearance: none;
}

.v-tabs__selected-line {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 1px;

  transform-origin: 0 0;
}

/*--------------------------------------------------------------
2.0 Spacings
--------------------------------------------------------------*/

@each $name, $value in $v-tabs-spacings {
  //.v-tabs--#{$name}
  .v-tabs--#{$name} {
    //.v-tab--#{$name} > .v-tab
    > .v-tab {
      margin-right: $value;

      &:last-child { margin-right: 0 }
    }
  }
}

/*--------------------------------------------------------------
3.0 Bodies
--------------------------------------------------------------*/

.v-tabs--text {
  //.v-tabs--text .v-tab
  .v-tab {
    padding: $gleam-spacing-unit*3.5;

    // adjust focus-ring
    &::before {
      top: $gleam-spacing-unit;
      bottom: $gleam-spacing-unit;
      left: -$gleam-spacing-unit*3;
      right: -$gleam-spacing-unit*3;
    }
  }
}

[class*="v-tabs--flat"],
.v-tabs--ghost {
  //.v-tab--flat .v-tab,
  //.v-tab--ghost .v-tab
  .v-tab {
    height: $gleam-spacing-unit*8;
    padding: $gleam-spacing-unit*4 $gleam-spacing-unit*3;
    border-radius: $v-tab-radius;

    //.v-tab--flat .v-tab .v-tab__before,
    //.v-tab--ghost .v-tab .v-tab__before
    .v-tab__before {
      //.v-tab--flat .v-tab .v-tab__before .v-tab__icon,
      //.v-tab--ghost .v-tab .v-tab__before .v-tab__icon
      .v-tab__icon {
        width: $gleam-spacing-unit*4;
        height: $gleam-spacing-unit*4;

        font-size: $gleam-spacing-unit*4;
      }
    }
  }
}

/*--------------------------------------------------------------
4.0 Themes
--------------------------------------------------------------*/

@each $theme in $v-tabs-themes {
  //.v-tabs--#{$theme}
  .v-tabs--#{$theme} {
    //.v-tabs--#{$theme} .v-tabs__selected-line
    .v-tabs__selected-line {
      border-bottom: 1px solid red;
    }

    //.v-tabs--#{$theme}.v-tabs--text
    &.v-tabs--text {
      //.v-tabs--#{$theme}.v-tabs--text .v-tab
      .v-tab {
        //.v-tabs--#{$theme}.v-tabs--text .v-tab:active,
        //.v-tabs--#{$theme}.v-tabs--text .v-tab:hover
        &:active,
        &:hover {
          color: blue
        }

        //.v-tabs--#{$theme}.v-tabs--text .v-tab.is-selected
        &.is-selected {
          color: green;
        }
      }
    }

    //.v-tabs--#{$theme}.v-tabs--flat
    &.v-tabs--flat {
      //.v-tabs--#{$theme}.v-tabs--flat .v-tab
      .v-tab {
        //.v-tabs--#{$theme}.v-tabs--flat .v-tab:hover
        &:hover {
          color: green;
        }

        //.v-tabs--#{$theme}.v-tabs--flat .v-tab:active,
        //.v-tabs--#{$theme}.v-tabs--flat .v-tab.is-selected
        &:active,
        &.is-selected {
          color: black;
          background-color: lime;
        }
      }
    }
  }
}
</style>
