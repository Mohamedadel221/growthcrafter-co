<template>
  <div class="paranet mt-5">
    <div
      class="text-capitalize main-title text-center position-relative mt-3 mb-5"
    >
      <h3 class="white-color position-relative pb-1">social media visuals</h3>
    </div>
    <div class="social-contents">
      <p
        class="wow animate__animated animate__fadeIn mt-0 mb-0 text-center text-capitalize white-color bold-text"
        data-wow-delay="0.1s"
        data-wow-duration="1s"
      >
        Social media visuals that works to improve, display the brand image and
        deliver a clear and simple message to the customer.
      </p>
    </div>
    <div class="soicl-media mt-2 pt-0">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="8" sm="8" lg="8">
            <img
              class="w-100 wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.1s"
              data-wow-duration="1s"
              src="@/assets/SocialMedia/social-mediabg.jpg"
              alt=""
              loading="lazy"
            />
            <v-row class="align-center mt-3">
              <v-col
                col="6"
                lg="6"
                md="6"
                sm="6"
                v-for="img in twoImg"
                :key="img.threeImg"
                class=""
                data-wow-delay="0.3s"
                data-wow-duration="1s"
              >
                <img
                  class="w-100 wow animate__animated animate__fadeInLeft"
                  :src="img.img"
                  alt=""
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" sm="4" lg="4">
            <img
              class="w-100 wow animate__animated animate__fadeInRight"
              data-wow-delay="0.5s"
              data-wow-duration="1s"
              loading="lazy"
              src="@/assets/SocialMedia/socialmedianew.jpeg"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="my-siwpers mt-3">
      <v-container fluid>
        <swiper
          :modules="moduels"
          :slides-per-view="4"
          :space-between="0"
          navigation
          loop
          effect="coverflow"
          :speed="1000"
          :autoplay="{ delay: 1000 }"
          :grab-cursor="true"
          :centered-slides="true"
          :coverflow-effect="coverflowEffect"
          :breakpoints="breakPoints"
        >
          <swiper-slide v-for="(image, index) in imagesSwiper" :key="index">
            <img class="w-100" loading="lazy" :src="image" alt="Slide Image" />
          </swiper-slide>
        </swiper>
      </v-container>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
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
    moduels: [Navigation, Autoplay, EffectCoverflow],
    coverflowEffect: {
      rotate: 50,
      stretch: -20,
      depth: 200,
      modifier: 2.5,
      slideShadows: true,
    },
    breakPoints: {
      320: { slidesPerView: 2, spaceBetween: 0 },
      768: { slidesPerView: 3, spaceBetween: 0 },
      600: { slidesPerView: 2, spaceBetween: 0 },
      1024: { slidesPerView: 4, spaceBetween: 0 },
    },
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style scoped lang="scss">
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
