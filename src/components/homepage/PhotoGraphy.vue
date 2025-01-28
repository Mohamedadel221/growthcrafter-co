<template>
  <div class="parent mt-5">
    <div
      class="text-capitalize main-title text-center position-relative mt-3 mb-5"
    >
      <h3 class="white-color position-relative pb-1">Photography</h3>
    </div>
    <div class="contnet-photography">
      <p class="mt-0 mb-0 text-center text-capitalize white-color bold-text">
        From product photography to lifestyle shots, our team ensures that every
        image reflects your brand's identity
      </p>
    </div>

    <div class="photo-graphy pt-0 mt-2">
      <v-container fluid>
        <v-row class="align-center">
          <v-col cols="12" md="4" sm="4" lg="4">
            <div class="img">
              <img
                class="w-100"
                src="@/assets/PhotoGraphy/1.jpeg"
                alt=""
                loading="lazy"
              />
            </div>
          </v-col>
          <v-col cols="12" md="8" sm="8" lg="8">
            <img
              class="w-100"
              loading="lazy"
              src="@/assets/PhotoGraphy/photo-bg.jpg"
              alt=""
            />
            <v-row class="align-center">
              <v-col
                class="mt-3"
                col="6"
                lg="6"
                md="6"
                sm="6"
                v-for="img in threeImg"
                :key="img.threeImg"
              >
                <img loading="lazy" class="w-100" :src="img.img" alt="" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="my-siwpers mt-2">
      <v-container fluid>
        <swiper
          :modules="moduels"
          :slides-per-view="4"
          :space-between="0"
          navigation
          loop
          effect="coverflow"
          :speed="1000"
          :autoplay="{ delay: 1500 }"
          :grab-cursor="true"
          :centered-slides="true"
          :coverflow-effect="coverflowEffect"
          :breakpoints="{
            320: { slidesPerView: 2, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 0 },
            600: { slidesPerView: 2, spaceBetween: 0 },
            1024: { slidesPerView: 4, spaceBetween: 0 },
          }"
        >
          <swiper-slide v-for="(image, index) in imagesSwiper" :key="index">
            <img loading="lazy" class="w-100" :src="image" alt="Slide Image" />
          </swiper-slide>
        </swiper>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    threeImg: [
      {
        img: require("@/assets/PhotoGraphy/3.png"),
      },
      {
        img: require("@/assets/PhotoGraphy/img_6878.jpg"),
      },
    ],
    imagesSwiper: [
      require("@/assets/PhotoGraphy/sliders/img_6713.jpg"),
      require("@/assets/PhotoGraphy/sliders/6.png"),
      require("@/assets/PhotoGraphy/sliders/5.png"),
      require("@/assets/PhotoGraphy/sliders/10.png"),
      require("@/assets/PhotoGraphy/sliders/newphotography2.png"),
      require("@/assets/PhotoGraphy/sliders/7.png"),
      require("@/assets/PhotoGraphy/sliders/4.png"),
    ],
    moduels: [Navigation, Autoplay, EffectCoverflow],
    coverflowEffect: {
      rotate: 43,
      stretch: 0,
      depth: 40,
      modifier: 5,
      slideShadows: true,
    },
  }),
};
</script>

<style scoped lang="scss">
.contnet-photography {
  p {
    font-size: 20px;
  }
}
.photo-graphy {
  img {
    border-radius: 12px;
  }
}
@media (max-width: 591px) {
  .contnet-photography {
    p {
      font-size: 12.5px !important;
    }
  }
}
@media (min-width: 592px) and (max-width: 767px) {
  .contnet-photography {
    p {
      font-size: 12px !important;
    }
  }
}
</style>
