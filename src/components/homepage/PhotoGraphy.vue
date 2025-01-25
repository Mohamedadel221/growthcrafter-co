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
          <v-col cols="12" md="4" sm="12" lg="4">
            <div class="img">
              <img
                class="w-100"
                src="@/assets/PhotoGraphy/1.jpeg"
                alt=""
                loading="lazy"
              />
              <div class="text text-center position-relative">
                <h2 class="white-color position-relative text-capitalize mb-3">
                  Photography
                </h2>
                <p class="text-capitalize white-color bold-text">
                  From product photography to lifestyle shots, our team ensures
                  that every image reflects your brand's identity
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="8" sm="12" lg="8">
            <img
              class="w-100"
              loading="lazy"
              src="@/assets/PhotoGraphy/photo-bg.jpg"
              alt=""
            />
            <v-row class="align-center">
              <v-col
                class="mt-3"
                col="4"
                lg="4"
                md="4"
                sm="4"
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
          <img loading="lazy" class="w-100" :src="image" alt="Slide Image" />
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
      {
        img: require("@/assets/PhotoGraphy/newphotography1.png"),
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
    moduels: [Navigation, Autoplay],
  }),
};
</script>

<style scoped lang="scss">
.my-siwpers {
  padding: 0px 17.5px;
}
.photo-graphy {
  img {
    border-radius: 10px;
  }
  p {
    font-size: 15px !important;
  }
}
.contnet-photography {
  p {
    font-size: 20px;
  }
}
@media (max-width: 591px) {
  .contnet-photography {
    p {
      font-size: 12.5px !important;
    }
  }
  .photo-graphy {
    p {
      font-size: 12px !important;
    }
  }
}
@media (min-width: 592px) and (max-width: 767px) {
  .contnet-photography {
    p {
      font-size: 12px !important;
    }
  }
  .photo-graphy {
    p {
      font-size: 12px !important;
    }
  }
}
</style>
