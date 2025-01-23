<template>
  <div class="why-choses mt-3">
    <div class="img-layout">
      <v-container fluid>
        <v-row class="align-center">
          <v-col cols="12" md="8" lg="8" sm="12">
            <div class="content-right-img">
              <h2 class="bold-text mt-3 mb-2 text-capitalize" color="#071119">
                why should you <br />
                choses
                <span class="green-color">growth Crafterco</span>
              </h2>
              <div
                class="content-why"
                v-for="contentLeft in contentRightImg"
                :key="contentLeft.contentWhy"
              >
                <p class="text-capitalize bold-text mt-3 mb-2" color="#071119">
                  {{ contentLeft.contentWhy }}
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
          <v-col cols="12" md="4" lg="4" sm="12">
            <div class="img-right-contetnt">
              <img
                class="w-100"
                src="@/assets/whycho/img_6109.jpg"
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
        contentWhy:
          "hesitate to reach out for a free consultation or to answer any  inquiries. Whether you’re looking to grow your business or enhance your digital presence, our team of experts is ready",
      },
      {
        contentWhy:
          "  We are here to support you and provide the best solutions toachieve your goals. Don’t to stand by your side every step ofthe way.",
      },
    ],
  }),
  computed: {
    isRTL() {
      return this.$i18n.locale === "en";
    },
  },
};
</script>

<style scoped lang="scss">
.why-choses {
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
    h2 {
      font-size: 18px;
    }
  }
}
@media (min-width: 592px) and (max-width: 767px) {
  .content-right-img {
    p {
      margin-right: 50px;
    }
    h2 {
      font-size: 18px;
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
</style>
