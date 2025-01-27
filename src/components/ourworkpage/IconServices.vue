<template>
  <div class="icon-services">
    <v-container fluid>
      <v-row class="align-center">
        <v-col
          col="6"
          lg="3"
          md="3"
          sm="6"
          v-for="icons in titleIconOne"
          :key="icons.title"
        >
          <div class="box">
            <div class="img text-center">
              <img :src="icons.img" alt="" />
            </div>
            <div class="text-box">
              <h3
                v-html="icons.title"
                class="text-capitalize text-center white-color"
              ></h3>
            </div>
          </div>
        </v-col>
        <v-col col="12" lg="6" md="6" sm="12">
          <div
            class="box larg-box"
            v-for="servicesPro in servicesProvide"
            :key="servicesPro.title"
          >
            <h3
              v-html="servicesPro.title"
              class="text-capitalize white-color"
            ></h3>
            <p class="text-capitalize white-color mt-0 mb-0 bold-text">
              {{ servicesPro.desciription }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          col="6"
          lg="3"
          md="3"
          sm="6"
          v-for="icon in fourImgIcon"
          :key="icon.title"
        >
          <div class="box">
            <div class="img text-center">
              <img :src="icon.img" alt="" />
            </div>
            <div class="text-box">
              <h3
                v-html="icon.title"
                class="text-center white-color text-capitalize"
              ></h3>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    titleIconOne: [
      {
        img: require("@/assets/icons/bar-chart.png"),
        title: `Business <span class="green-color"> <br/> Development</span>`,
      },
      {
        img: require("@/assets/icons/web-development.png"),
        title: `Web Design <span class="green-color"> <br/> &Development</span>`,
      },
    ],
    // services-provides //
    servicesProvide: [
      {
        title: `services <span class="green-color"> <br/> Provided</span>`,
        desciription:
          "At Growth Crafters, we are committed to driving your busines growth with a comprehensive suite of services",
      },
    ],
    fourImgIcon: [
      {
        img: require("@/assets/icons/camera.png"),
        title: `Photography <span class="green-color"><br/> &Videography</span><br>`,
      },
      {
        img: require("@/assets/icons/smartphone-call.png"),
        title: `Social Media <span class="green-color"><br /> Management</span>`,
      },
      {
        img: require("@/assets/icons/subscription.png"),
        title: `Media Buying <span class="green-color"> <br />&performance</span>`,
      },
      {
        img: require("@/assets/icons/coding.png"),
        title: `Programmatic <span class="green-color"><br />&Native ads</span>`,
      },
    ],
  }),
};
</script>
<style scoped lang="scss">
.box {
  border: 2px solid #2bae91;
  padding: 10px 15px;
  border-radius: 10px !important;
  img {
    width: 25%;
    border: 2px solid #2bae91;
    padding: 5px;
    border-radius: 2px !important;
    background: #fff !important;
  }
}
.box {
  p {
    font-size: 18px;
  }
}
@media (max-width: 1100px) {
  .box {
    p {
      font-size: 14px;
    }
  }
}
@media (max-width: 768px) {
  .text-box {
    h3 {
      font-size: 16px;
    }
  }
}
@media (max-width: 767px) {
  .box {
    img {
      width: 25% !important;
    }
  }
}
@media (min-width: 960px) {
  .larg-box {
    padding: 20px 17px !important;
  }
}
</style>
