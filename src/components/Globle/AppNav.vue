<template>
  <div class="app-nav">
    <v-app-bar
      :style="{ backgroundColor: navbarColor }"
      class="navbar-animation"
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
          <v-btn class="text-capitalize" @click="$router.push({ name: 'home' })"
            >home</v-btn
          >
        </li>
        <li>
          <v-btn
            class="text-capitalize"
            @click="$router.push({ name: 'our-work' })"
            >our work</v-btn
          >
        </li>
        <li>
          <v-btn
            class="text-capitalize"
            @click="$router.push({ name: 'contact-us' })"
            >contact</v-btn
          >
        </li>
        <li>
          <v-btn class="text-capitalize" href="https:///wa.me/+201124908446">
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
  }),
  mounted() {
    window.addEventListener("scroll", this.changeNavbarColor);
  },
  methods: {
    changeNavbarColor() {
      if (window.scrollY >= 300) {
        this.navbarColor = "#071119";
      } else {
        this.navbarColor = "#000";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.navbar-animation {
  transition: background-color 0.3s ease-in-out;
}
.app-nav {
  img {
    width: 110px;
    cursor: pointer;
  }
  li .v-btn {
    color: #e8fff5;
    font-size: 15px;
  }
}
</style>
