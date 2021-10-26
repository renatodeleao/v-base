# v-eye

The `v-eye` package provides the a set of compound components to create a group of selectable items out of any component. You can see it as the baseline functionality for components like `tabs`, `button-groups`, `accordions`, `carousels` and possibily others.

In one line: it's [`Vuetify's` `v-item-group`](https://vuetifyjs.com/en/components/item-groups/) without all `vuetify` fuss attached. All props to them 🙏

## Installation

Using a package package manager

```bash
yarn add v-eye
```

## Usage
By default, all components render an un-styled root node `div`. If just to bind the logic to your own components, you can make them renderless/headless and use its `slot-scope` using `as="template"` prop, but remember that, due to Vue2 limitation, a single root node must be provided.

### Basic: a Disclosure component.
Basically it's an equivalent of [`<details><summary>` native implementation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details), but state-driven.

```vue
<!-- your disclosure.vue -->
<template>
  <v-eye v-model="active">
    <v-eye-switch>Summary toggler</v-eye-switch>
    <v-eye-content>Details</v-eye-content>
  </v-eye>
</template>

<script>
import { VEye, VEyeSwitch, VEyeContent } from 'v-eye'

export default {
  name: 'Disclosure',
  components: { VEye, VEyeSwitch, VEyeContent },
  data: () => ({
    active: false
  })
}
```

### Basic: A password input visibility toggler

```vue
<!-- your-password-input.vue -->
<template>
  <div class="your-app-input">
    <input :type="inputType">
    <v-eye v-model="isPasswordVisible">
      <v-eye-switch>
        <your-app-icon :icon="isPasswordVisible ? '🙈 ': '🙉' " />
      </v-eye-switch>   
    </v-eye>   
  </v-eye>
</template>

<script>
export default {
  data: () => ({ isPasswordVisible: false })
  computed: {
    inputType() {
      return this.isPasswordVisible ? 'text' : 'password'
    }
  }
}
</script>

```
#### what if have my on "trigger" component, like a button?

Picking up on the previous example, just use the headless version via `as="template` prop.

```vue
<!-- your-password-input.vue -->
<template>
  <div class="your-app-input">
    <input :type="inputType">
    <v-eye v-model="isPasswordVisible" as="template" #default="{ toggle }">
      <your-app-button
        :icon="isPasswordVisible ? '🙈 ': '🙉' " 
        @click="toggle"
      />
    </v-eye>   
  </v-eye>
</template>
```

### Group Usage
Till now, you might be wondering that every example can be easily achievable without any library. Why the heck would you want another package? 

The usefulness of this package really pays off when you want for each `v-eye` to be aware of similar siblings state, for example an `accordion` where only one panel can be open at the time — clicking one panel will close the current open sibling. That's when `VEyeManager` comes handy.


```vue
<!-- your disclosure.vue -->
<template>
  <v-eye-manager v-model="active" :multiple="false" :mandatory="true">
    <v-eye :uid="1">
      <v-eye-switch>Summary toggler</v-eye-switch>
      <v-eye-content>Details</v-eye-content>
    </v-eye>
    <v-eye :uid="2">
      <v-eye-switch>Summary toggler</v-eye-switch>
      <v-eye-content>Details</v-eye-content>
    </v-eye>
  </v-eye-manager>
</template>

<script>
import { VEyeManager, VEye, VEyeSwitch, VEyeContent } from 'v-eye'

export default {
  name: 'Disclosure',
  components: { VEyeManager, VEye, VEyeSwitch, VEyeContent },
  data: () => ({
    active: 1
  })
}
```

1. You might have noticed the `multiple` prop is set to `false`, meaning only one eye can be `active` at a time. 
1. The `mandatory` prop, by default is set to `false`, but setting it to `true` states that at least one `v-eye` must be active all the time.
1. A `uid` prop was added to each `v-eye`, so they can be easy to identify at the model property.


### Advanced usage
TODO: explain slots, props and all possibilities.

## Props
This is a `0.X.Y` version this means that the api is subject to changes. Props marked with `BETA` on the description are most likely candidates to those changes.
### VEye
| name   | default value | description                                                                                                                               |
|:-------|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| as     | `template`    | Template means that only the a default scope slot will be rendered (headless) not actual html element. So you need to provide it yourself |
| active | `false`       |                                                                                                                                           |
| uid    | `null`        | unique identifier for each item. Omitting will assign a vue generated `_uid`                                                              |

### VEyeManager
| name                           | default value             | description                                                                                                                                                                                               |
|:-------------------------------|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| as                             | `template`                | Template means that only the a default scope slot will be rendered (headless) not actual html element. So you need to provide it yourself                                                                 |
| active                         | `{String|Array}` / `null` | The controlled active state of the managed VEyes.                                                                                                                                                         |
| defaultActive                  | `{String|Array}` / `null` | The active state when initially rendered. Usefull only if you're not controlling the component state (using v-model)                                                                                      |
| mandatory                      | `{Boolean}` / `false`     | At least one eye must be active all the time. Good for accordions, tabs.                                                                                                                                  |
| multiple                       | `{Boolean}` / `false`     | Allows multiple eyes to be active at the same time. Turns v-model into an array of `uid`                                                                                                                  |
| watchPropsWithModelSideEffects | `{Boolean}` / false       | BETA — if v-model data should react immediately to prop some prop changes. Ex, a multiple instance with 2 items selected. If multiple prop changes to false, the model is updated to keep only one value. |
| static                         | `{Boolean}` / false       | BETA - Do not manage VEyes under its scope. currently required for router-driven state, although we could do it without it.                                                                               |

### slot-scope
All components expose two props vis `default` slot-scope:
1. `isActive` matches current instance active state. 
1. `toggle` the method to toggle that state.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
