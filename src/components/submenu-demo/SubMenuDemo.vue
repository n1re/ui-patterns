<template>
  <v-menu
    :items="items"
  />
</template>

<script>
import SubMenuDemoBar from "./SubMenuDemoBar.vue";
import SubMenuDemoFoo from "./SubMenuDemoFoo.vue";
import VMenu from "../common/hover-submenu/VMenu.vue";

export default {
  components: {
    VMenu,
  },
  setup() {
    return {
      items: [
        {
          label: "bar",
          submenu: SubMenuDemoBar,
        },
        {
          label: "foo",
          submenu: SubMenuDemoFoo,
        },
      ],
    }
  }
};
</script>
