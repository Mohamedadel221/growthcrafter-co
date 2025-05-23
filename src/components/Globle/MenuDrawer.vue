<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      location="left"
      temporary
      v-model="drawer"
      width="300"
      :style="{ backgroundColor: navbarColor }"
      class="navbar-animation"
    >
      <div
        class="text-and-close d-flex mt-3 mb-2 justify-space-between align-center"
      >
        <h3
          class="text-capitalize white-color px-2"
          :style="{ color: textNavbarColor }"
        >
          growth crafterco
        </h3>
        <v-icon @click="drawer = !drawer" class="text-error px-2"
          >mdi-close</v-icon
        >
      </div>
      <div class="btns d-flex justify-center align-center mt-10">
        <ul class="">
          <li class="mt-3 mb-2 mx-2">
            <v-btn
              :class="{ active: $route.path === '/' }"
              class="text-capitalize"
              @click="$router.push({ name: 'home' })"
              :style="{ color: textNavbarColor }"
              >home</v-btn
            >
          </li>
          <li class="mt-3 mb-2 mx-1">
            <v-btn
              :class="{ active: $route.path === '/our-work' }"
              class="text-capitalize"
              @click="$router.push({ name: 'our-work' })"
              :style="{ color: textNavbarColor }"
              >our work</v-btn
            >
          </li>
          <li class="mt-3 mb-2">
            <v-btn
              :class="{ active: $route.path === '/contact-us' }"
              class="text-capitalize mx-4"
              @click="$router.push({ name: 'contact-us' })"
              :style="{ color: textNavbarColor }"
              >contact</v-btn
            >
          </li>
          <li class="mt-3 mb-2 mx-2">
            <v-btn
              class="text-capitalize"
              href="https:///wa.me/+201124908446"
              :style="{ color: textNavbarColor }"
              >pricing</v-btn
            >
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["emitter"],
  data() {
    return {
      drawer: false,
      navbarColor: "#000",
      textNavbarColor: "#e8fff5",
    };
  },
  methods: {
    changeNavbarColor() {
      if (window.scrollY >= 300) {
        this.navbarColor = "#efefef";
      } else {
        this.navbarColor = "#000";
      }
    },
    changeColorNavbar() {
      if (window.scrollY >= 300) {
        this.textNavbarColor = "#000";
      } else {
        this.textNavbarColor = "#e8fff5";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.changeNavbarColor);
    window.addEventListener("scroll", this.changeColorNavbar);
    this.emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  opacity: 0.9;
}
.navbar-animation {
  transition: background-color 0.3s ease-in-out;
}
.menu-drawer {
  .active {
    color: #02ff96 !important;
  }
  li {
    .v-btn {
      color: #e8fff5;
      font-size: 20px;
      background: none;
      box-shadow: none !important;
      margin: 10px;
    }
  }
}
</style>
