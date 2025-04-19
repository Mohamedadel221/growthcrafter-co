<template>
  <div class="partenar mt-5">
    <div class="main-title text-center mt-3 mb-3">
      <div class="text-capitalize">
        <h3 class="white-color">our partener</h3>
      </div>
    </div>
    <v-container fluid class="">
      <v-row class="align-center">
        <v-col
          v-for="logo in logos"
          :key="logo.img"
          col="3"
          md="3"
          lg="3"
          sm="3"
          class="wow animate__animated animate__fadeIn"
          data-wow-delay="0.3s"
        >
          <div class="logo-img">
            <a :href="logo.href" target="_blank">
              <img loading="lazy" :src="logo.img" alt="" />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  data: () => ({
    logos: [
      {
        img: require("@/assets/part-logo/36.png"),
        href: "https://www.instagram.com/vivify.studios?igsh=MW80dTdlbTJ3azBtNg%3D%3D&utm_source=qr",
      },
      {
        img: require("@/assets/part-logo/31.png"),
        href: "https://www.instagram.com/riminico.shoes?igsh=OGh3djdueDJpZ3A2",
      },
      {
        img: require("@/assets/part-logo/40.png"),
        href: "https://www.instagram.com/koftgi_basha?igsh=MXJmeTBiam52cTUwOA==",
      },
      {
        img: require("@/assets/part-logo/41.png"),
        href: "https://www.facebook.com/hipoint.dental.lab?mibextid=LQQJ4d",
      },
      {
        img: require("@/assets/part-logo/35.png"),
        href: "https://www.instagram.com/tajmahal.eg?igsh=MW15a3dycXY3ZWpuZg==",
      },
      {
        img: require("@/assets/part-logo/38.png"),
        href: "https://www.instagram.com/bf_sportswear?igsh=MWFwMm9oY2E1Z3l4dQ==",
      },
      {
        img: require("@/assets/part-logo/32.png"),
        href: "https://www.facebook.com/eo.homewear?mibextid=LQQJ4d2",
      },
      {
        img: require("@/assets/part-logo/37.png"),
        href: "https://www.instagram.com/70p_n?igsh=Y3JvdGo2cThmNGNo",
      },
    ],
  }),
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.logo-img {
  img {
    width: 180px;
    display: flex;
    margin: auto;
  }
}
@media (max-width: 767px) {
  .logo-img {
    img {
      width: 65px !important;
    }
  }
}
@media (max-width: 363px) {
  .logo-img {
    img {
      width: 52px !important;
    }
  }
}
</style>
