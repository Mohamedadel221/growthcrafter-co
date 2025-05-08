<template>
  <app-layouts>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </app-layouts>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-y: hidden !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
html,
body {
  scroll-behavior: smooth;
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
