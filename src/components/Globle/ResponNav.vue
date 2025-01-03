<template>
  <div class="responsive-nav">
    <v-app-bar color="#071119">
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
  }),

  methods: {
    openMenu() {
      this.emitter.emit("openMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.img-logo {
  img {
    width: 100px;
    display: flex;
    margin: auto;
    cursor: pointer;
  }
}
.lang {
  button {
    font-size: 15px;
    font-weight: 800;
  }
  img {
    width: 16px !important;
    height: 16px;
  }
}
</style>
