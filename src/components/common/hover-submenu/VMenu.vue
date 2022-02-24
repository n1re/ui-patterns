<template>
  <div
    class="menu"
    @mouseleave="current = null"
  >
    <div class="menu__activators">
      <button
        v-for="{ label, submenu}, index in items"
        :key="index"
        :label="label"
        @mouseenter="current = submenu"
      >{{label}}</button>
    </div>
    <component
      class="menu__submenu"
      :is="current"
    />
  </div>
</template>

<script>
import VActivator from './VActivator.vue'
import { shallowRef } from 'vue'

export default {
  components: {
    VActivator
  },
  props: {
    items: Array
  },
  setup() {
    return {
      current: shallowRef(null)
    }
  }
}
</script>
