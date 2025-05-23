<template>
  <div class="app-nav">
    <v-app-bar
      :style="{ backgroundColor: navbarColor }"
      class="navbar-animation"
      elevation="0"
    >
      <v-app-bar-title>
        <img
          @click="$router.push({ name: 'home' })"
          src="@/assets/logo/GrowthLogo-removebg-preview.png"
          alt=""
        />
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <ul class="d-flex align-center">
        <li class="">
          <v-btn
            :class="{ active: $route.path === '/' }"
            class="text-capitalize navbar-animation"
            :style="{ color: textNavbarColor }"
            @click="$router.push({ name: 'home' })"
            >home</v-btn
          >
        </li>
        <li>
          <v-btn
            :class="{ active: $route.path === '/our-work' }"
            class="text-capitalize navbar-animation"
            @click="$router.push({ name: 'our-work' })"
            :style="{ color: textNavbarColor }"
            >our work</v-btn
          >
        </li>
        <li>
          <v-btn
            :class="{ active: $route.path === '/contact-us' }"
            class="text-capitalize navbar-animation"
            @click="$router.push({ name: 'contact-us' })"
            :style="{ color: textNavbarColor }"
            >contact</v-btn
          >
        </li>
        <li>
          <v-btn
            :style="{ color: textNavbarColor }"
            class="text-capitalize navbar-animation"
            href="https:///wa.me/+201124908446"
          >
            pricing
          </v-btn>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    navbarColor: "#000",
    textNavbarColor: "#fff",
  }),
  mounted() {
    window.addEventListener("scroll", this.changeNavbarColor);
    window.addEventListener("scroll", this.changeColorNavbar);
  },
  methods: {
    changeNavbarColor() {
      if (window.scrollY >= 300) {
        this.navbarColor = "#fff";
      } else {
        this.navbarColor = "#000";
      }
    },
    changeColorNavbar() {
      if (window.scrollY >= 300) {
        this.textNavbarColor = "#000";
      } else {
        this.textNavbarColor = "#fff";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.v-app-bar {
  opacity: 0.7;
  .active {
    color: #02ff96 !important;
  }
}
.navbar-animation {
  transition: background-color 0.3s ease-in-out;
}
.app-nav {
  img {
    width: 110px;
    cursor: pointer;
  }
  li .v-btn {
    font-size: 15px;
  }
}
</style>
