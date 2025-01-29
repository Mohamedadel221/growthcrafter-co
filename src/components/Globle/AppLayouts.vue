<template>
  <div class="layout">
    <v-layout class="position-relative">
      <MenuDrawer />
      <v-main
        :style="`padding-top:${
          $route.name == 'two-video'
            ? '0px'
            : windowWidth <= 990
            ? '0px'
            : '63px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNav
        v-if="
          $route.name != 'two-video' &&
          $route.name != 'error-page' &&
          windowWidth > 990
        "
      />
      <ResponNav v-if="windowWidth <= 990 && $route.name != 'error-page'" />
      <WhatsButton />
      <AppFooter
        v-if="$route.name != 'two-video' && $route.name != 'error-page'"
      />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "@/components/Globle/AppNav.vue";
import AppFooter from "@/components/Globle/AppFooter.vue";
import WhatsButton from "./WhatsButton.vue";
import ResponNav from "./ResponNav.vue";
import MenuDrawer from "@/components/Globle/MenuDrawer.vue";
export default {
  components: {
    AppNav,
    ResponNav,
    MenuDrawer,
    AppFooter,
    WhatsButton,
  },
  data: () => ({
    windowWidth: 0,
    fixedShow: false,
  }),
  mounted() {
    this.windowWidth = innerWidth;
    window.onresize = () => {
      this.windowWidth = innerWidth;
      this.fixedShow = innerWidth;
    };
  },
};
</script>

<style scoped lang="scss"></style>
