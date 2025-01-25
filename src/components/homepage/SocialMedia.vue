<template>
  <div class="paranet mt-5">
    <div
      class="text-capitalize main-title text-center position-relative mt-3 mb-5"
    >
      <h3 class="white-color position-relative pb-1">social media visual</h3>
    </div>
    <div class="social-contents">
      <p class="mt-0 mb-0 text-center text-capitalize white-color bold-text">
        Social media visuals that works to improve, display the brand image and
        deliver a clear and simple message to the customer.
      </p>
    </div>
    <div class="soicl-media mt-2 pt-0">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4" sm="12" lg="4">
            <img
              class="w-100"
              loading="lazy"
              src="@/assets/SocialMedia/IMG_6870.jpg"
              alt=""
            />
          </v-col>
          <v-col cols="12" md="8" sm="12" lg="8">
            <img
              class="w-100"
              src="@/assets/SocialMedia/social-mediabg.jpg"
              alt=""
              loading="lazy"
            />
            <v-row class="align-center">
              <v-col
                class="mt-3"
                col="6"
                lg="6"
                md="6"
                sm="6"
                v-for="img in twoImg"
                :key="img.threeImg"
              >
                <img class="w-100" :src="img.img" alt="" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="my-siwpers mt-3">
      <swiper
        :modules="moduels"
        :slides-per-view="4"
        :space-between="0"
        navigation
        autoplay
        loop
        effect="slide"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          600: { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }"
      >
        <swiper-slide v-for="(image, index) in imagesSwiper" :key="index">
          <img class="w-100" loading="lazy" :src="image" alt="Slide Image" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
export default {
  data: () => ({
    twoImg: [
      {
        img: require("@/assets/SocialMedia/IMG_1653.png"),
      },
      {
        img: require("@/assets/SocialMedia/vis2.jpg"),
      },
    ],
    imagesSwiper: [
      require("@/assets/SocialMedia/sliders/19.png"),
      require("@/assets/SocialMedia/sliders/20.png"),
      require("@/assets/SocialMedia/sliders/16.png"),
      require("@/assets/SocialMedia/sliders/12.png"),
      require("@/assets/SocialMedia/sliders/21.png"),
      require("@/assets/SocialMedia/sliders/18.png"),
      require("@/assets/SocialMedia/sliders/14.png"),
      require("@/assets/SocialMedia/sliders/vis1.jpg"),
      require("@/assets/SocialMedia/sliders/22.png"),
      require("@/assets/SocialMedia/sliders/13.png"),
      require("@/assets/SocialMedia/sliders/23.png"),
    ],
    moduels: [Navigation, Autoplay],
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped lang="scss">
.my-siwpers {
  padding: 0px 17.5px;
}
.soicl-media {
  img {
    border-radius: 10px;
  }
}
.social-contents {
  p {
    font-size: 20px;
  }
}
@media (max-width: 591px) {
  .social-contents {
    p {
      font-size: 11.4px !important;
    }
  }
}
@media (min-width: 592px) and (max-width: 767px) {
  .social-contents {
    p {
      font-size: 12px !important;
    }
  }
}
</style>
