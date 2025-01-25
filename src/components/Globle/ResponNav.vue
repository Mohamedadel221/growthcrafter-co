<template>
  <div class="responsive-nav">
    <v-app-bar
      :style="{ backgroundColor: navbarColor }"
      class="navbar-animation"
    >
      <v-container fluid>
        <v-row class="align-center">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon color="#e8fff5" @click="openMenu()">
            </v-app-bar-nav-icon>
          </v-col>
          <v-col cols="4">
            <div class="img-logo">
              <img
                @click="$router.push({ name: 'home' })"
                src="@/assets/logo/GrowthLogo-removebg-preview.png"
                alt=""
              />
            </div>
          </v-col>
          <v-col cols="4" class="d-flex justify-end" style="gap: 7px">
            <div class="responive-price-btn">
              <v-btn
                class="text-capitalize"
                href="https:///wa.me/+201124908446"
              >
                pricing
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["emitter"],
  data: () => ({
    drawer: false,
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
    openMenu() {
      this.emitter.emit("openMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-animation {
  transition: background-color 0.3s ease-in-out;
}
.img-logo {
  img {
    width: 100px;
    display: flex;
    margin: auto;
    cursor: pointer;
  }
}
.responive-price-btn {
  .v-btn {
    color: #e8fff5 !important;
  }
}
</style>
