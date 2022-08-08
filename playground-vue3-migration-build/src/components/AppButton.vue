<script>
import { h } from 'vue'

function listenersToVue3Attrs($listeners) {
  return Object.entries($listeners).reduce(
    (acc, [name, handler]) => {
      name = `on${name.charAt(0).toUpperCase() + name.slice(1)}`
      acc[name] = handler
      return acc
    },
    {}
  )
}

export default {
  compatConfig: {
    MODE: 2,
    INSTANCE_SCOPED_SLOTS: true,
  },
  name: 'AppButton',
  render() {
    return h(
      'button',
      {
        class: 'app-button',
        ...this.$attrs,
        ...listenersToVue3Attrs(this.$listeners)
      },
      [
        this.$scopedSlots.icon && h('span', this.$scopedSlots.icon({ foo: 42 })),
        this.$slots.default
      ]
    )
  }
}
</script>

<style>
.app-button {
  background: lime !important;
}
</style>