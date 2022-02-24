<template>
  <div class="test-page">
    <div class="test-page__head">
      <sub-menu-demo />
    </div>
    <div class="test-page__body"></div>
  </div>
</template>

<script>
import SubMenuDemo from '../components/submenu-demo/SubMenuDemo.vue'

export default {
  components: {
    SubMenuDemo,
  }
}
</script>

<style scoped>
.test-page__head {
  height: 20vh;
}

.test-page__body {
  height: 80vh;
}
</style>
