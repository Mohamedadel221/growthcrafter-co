<template>
  <!--section-three-grid-->
  <div class="we-help-section pt-3">
    <v-container fluid>
      <v-row class="align-center resv">
        <v-col cols="12" lg="7" md="7" sm="7">
          <div class="imgs-grid">
            <div class="grid grid-1">
              <img
                lazy="loading"
                class="w-100 wow animate__animated animate__zoomIn"
                data-wow-delay="0.3s"
                src="@/assets/creativemarket/1.jpg"
                alt=""
              />
            </div>
            <div class="grid grid-2">
              <img
                lazy="loading"
                class="w-100 wow animate__animated animate__zoomIn"
                data-wow-delay="0.6s"
                src="@/assets/creativemarket/2.jpg"
                alt=""
              />
            </div>
            <div class="grid grid-3">
              <img
                lazy="loading"
                class="w-100 wow animate__animated animate__zoomIn"
                data-wow-delay="0.9s"
                src="@/assets/creativemarket/3.jpg"
                alt=""
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="5">
          <div
            class="content-about-grid wow animate__animated animate__slideInDown"
            data-wow-delay="0.3"
            v-for="conAbout in contentAbout"
            :key="conAbout.title"
          >
            <div class="title-grid-three-img">
              <h2
                class="text-capitalize white-color mb-2 text-center wow animate__animated animate__slideInLeft"
                data-wow-delay="0.6"
              >
                {{ conAbout.title }}
              </h2>
            </div>
            <div class="content-grid-three-img mt-3 mb-2">
              <p
                class="text-capitalize white-color bold-text wow animate__animated animate__slideInLeft wow animate__animated animate__slideInRight"
                data-wow-delay="0.9"
              >
                {{ conAbout.descrip }}
              </p>
            </div>
          </div>
          <div class="btn-cal text-center mt-10">
            <v-btn
              color="#2bae91"
              class="text-capitalize"
              variant="outlined"
              density="compact"
              width="200"
              height="50"
              href="tel:+201124908446"
              elavation="0"
              >contact us</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--section-three-grid-->
</template>

<script>
export default {
  data: () => ({
    contentAbout: [
      {
        title: "creative digital marketing agency",
        descrip:
          "Our digital marketing agency experts craft tailored content strategies to engage your audience across multiple platforms.",
      },
      {
        descrip:
          "we manage your social media presence with precision, ensuring consistent brand messaging and fostering community growth.",
      },
      {
        title: "Strategic Planning",
        descrip:
          "Our experts work with you to develop long-term growth strategies that are aligned with your business goals.",
      },
      {
        title: "Performance Benchmarking",
        descrip:
          "We benchmark your performance against industry standards and competitors, identifying areas where you can improve.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
/*three-img-grid*/
.we-help-section {
  background-color: #000;
  .imgs-grid {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(27, 1fr);
    position: relative;
  }
  .imgs-grid .grid {
    position: relative;
    img {
      border-radius: 12px;
    }
  }
  .imgs-grid .grid.grid-1 {
    -ms-grid-column: 1;
    -ms-grid-column-span: 18;
    grid-column: 1 / span 18;
    -ms-grid-row: 1;
    -ms-grid-row-span: 27;
    grid-row: 1 / span 27;
  }
  .imgs-grid .grid.grid-2 {
    -ms-grid-column: 19;
    -ms-grid-column-span: 27;
    grid-column: 19 / span 27;
    -ms-grid-row: 1;
    -ms-grid-row-span: 5;
    grid-row: 1 / span 5;
    padding-left: 20px;
  }
  .imgs-grid .grid.grid-3 {
    -ms-grid-column: 14;
    -ms-grid-column-span: 16;
    grid-column: 14 / span 16;
    -ms-grid-row: 6;
    -ms-grid-row-span: 27;
    grid-row: 6 / span 27;
    padding-top: 30px;
  }
}
/*three-img-grid*/
.content-grid-three-img {
  p {
    font-size: 15px;
    opacity: 0.7;
  }
}
@media (max-width: 1200px) {
  .title-grid-three-img {
    h2 {
      font-size: 18px;
    }
  }
  .content-grid-three-img {
    p {
      font-size: 10px;
    }
  }
}
@media (max-width: 599px) {
  .resv {
    flex-direction: column-reverse !important;
  }
}
</style>

<!-- <template>
  <div class="creative-market mt-3">
    <div class="img-layout">
      <v-container fluid>
        <v-row class="align-center">
          <v-col cols="12" md="8" lg="8" sm="12">
            <div
              class="content-right-img"
              v-for="content in contentRightImg"
              :key="content.descri"
            >
              <h2 class="bold-text mt-3 mb-2 text-capitalize" color="#071119">
                creative <br />
                digital <span class="green-color">marketing agency</span>
              </h2>
              <p class="text-capitalize bold-text mt-3 mb-2" color="#071119">
                {{ content.descriOne }}
              </p>
              <p class="mt-3 mb-2 bold-text text-capitalize" color="#071119">
                {{ content.descriTwo }}
              </p>
              <div class="btn-cal text-center mt-10">
                <v-btn
                  color="#2bae91"
                  class="text-capitalize"
                  variant="outlined"
                  density="compact"
                  width="200"
                  height="50"
                  href="tel:+201124908446"
                  elavation="0"
                  >contact us</v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4" sm="12">
            <div class="img-right-contetnt">
              <img
                class="w-100"
                src="@/assets/our-serv/img_6125.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    contentRightImg: [
      {
        descriOne:
          "Our digital marketing agency experts craft tailored content strategies to engage your audience across multiple platforms.",
        descriTwo:
          "we manage your social media presence with precision, ensuring consistent brand messaging and fostering community growth.",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.creative-market {
  background: #071119;
  .img-layout {
    position: relative;
    z-index: 1;
    padding: 10px;
    &::before {
      position: absolute;
      content: "";
      width: 85%;
      height: 100%;
      background: #efefef;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
}
@media (max-width: 591px) {
  .content-right-img {
    p {
      margin-right: 40px;
    }
  }
}
@media (min-width: 592px) and (max-width: 767px) {
  .content-right-img {
    p {
      margin-right: 50px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1029px) {
  .content-right-img {
    p {
      margin-right: 60px;
    }
  }
}
@media (max-width: 360px) {
  .content-right-img {
    h2 {
      font-size: 19px;
    }
  }
}
</style> -->
