<template>
  <div class="parent mt-5">
    <div
      class="text-capitalize main-title text-center position-relative mt-3 mb-5"
    >
      <h3 class="white-color position-relative pb-1">Photography</h3>
    </div>
    <div class="contnet-photography">
      <p
        class="mt-0 mb-0 text-center text-capitalize white-color bold-text wow animate__animated animate__fadeIn"
        data-wow-delay="0.1s"
        data-wow-duration="1s"
      >
        From product photography to lifestyle shots, our team ensures that every
        image reflects your brand's identity
      </p>
    </div>
    <div class="photo-graphy pt-0 mt-2">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4" lg="4" sm="4">
            <div
              class="grid-imgs mt-2 wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.1s"
              data-wow-duration="1s"
            >
              <img
                src="@/assets/PhotoGraphy/protriet.jpeg"
                class="w-100"
                alt=""
                loading="lazy"
              />
            </div>
          </v-col>
          <v-col cols="12" md="8" lg="8" sm="8">
            <div
              class="grid-imgs mt-2 wow animate__animated animate__fadeInDown"
              data-wow-delay="0.3s"
              data-wow-duration="1s"
            >
              <img
                src="@/assets/PhotoGraphy/photo-bg.jpg"
                class="w-100"
                alt=""
                loading="lazy"
              />
            </div>
            <v-row class="mt-3">
              <v-col col="6">
                <div
                  class="two-grid-img wow animate__animated animate__fadeInLeft"
                  data-wow-delay="0.5s"
                  data-wow-duration="1s"
                >
                  <img
                    src="@/assets/PhotoGraphy/img_6878.jpg"
                    class="w-100"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </v-col>
              <v-col col="6">
                <div
                  class="two-grid-img wow animate__animated animate__fadeInRight"
                  data-wow-delay="0.7s"
                  data-wow-duration="1s"
                >
                  <img
                    src="@/assets/PhotoGraphy/3.png"
                    loading="lazy"
                    class="w-100"
                    alt=""
                  />
                </div>
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
          :autoplay="{ delay: 1000 }"
          :grab-cursor="true"
          :centered-slides="true"
          :coverflow-effect="coverflowEffect"
          :breakpoints="breakPoints"
        >
          <swiper-slide v-for="(image, index) in imagesSwiper" :key="index">
            <img
              loading="lazy"
              class="w-100 wow animate__animated animate__zoomInDown"
              data-wow-delay="0.9"
              :src="image"
              alt="Slide Image"
            />
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
