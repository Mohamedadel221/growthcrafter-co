<template>
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
          "GWe manage your social media presence with precision, ensuring consistent brand messaging and fostering community growth.",
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
</style>
