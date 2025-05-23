<template>
  <app-layouts>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </app-layouts>
</template>

<script>
import "@/assets/style/style.scss";
import AppLayouts from "./components/Globle/AppLayouts.vue";
import "animate.css";

export default {
  components: {
    AppLayouts,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-y: hidden !important;
  overflow: hidden;
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
