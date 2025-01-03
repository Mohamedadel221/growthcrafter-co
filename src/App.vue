<template>
  <app-layouts>
    <router-view />
  </app-layouts>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import "@/assets/style/style.scss";
import AppLayouts from "./components/Globle/AppLayouts.vue";
export default {
  components: {
    AppLayouts,
  },
};
</script>
