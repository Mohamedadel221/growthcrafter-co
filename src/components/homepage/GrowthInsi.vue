<template>
  <div class="parent-growth mt-2">
    <div class="gowrth-insi desktop-growth">
      <v-container fluid>
        <v-row class="align-center resv">
          <v-col cols="12" md="6" lg="6" sm="12">
            <div class="img">
              <img
                class="w-100"
                src="@/assets/growthInsi/img_6773.png"
                alt=""
                loading="lazy"
              />
              <v-dialog max-width="900" max-height="600">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    v-bind="activatorProps"
                    class="text-capitalize position-relative text-bold quick-view"
                    variant="elevated"
                    density="compact"
                    width="200"
                    height="50"
                    >viewGrowth</v-btn
                  >
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card elevation="0">
                    <div class="close-btn d-flex justify-end">
                      <v-icon
                        @click="isActive.value = false"
                        style="cursor: pointer"
                        color="red"
                        >mdi-close</v-icon
                      >
                    </div>

                    <div class="tabs-imgs text-center">
                      <img
                        loading="lazy"
                        :src="tabs.img"
                        alt=""
                        width="350"
                        height="350"
                      />

                      <v-tabs center-active height="200" v-model="tabs">
                        <v-tab
                          v-for="(image, i) in images"
                          :key="i"
                          class="mx-10"
                          :value="image"
                        >
                          <img
                            :src="image.img"
                            width="100"
                            height="100"
                            alt=""
                            loading="lazy"
                          />
                        </v-tab>
                      </v-tabs>
                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close"
                        append-icon="mdi-close"
                        color="red"
                        class="text-capitalize"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="12">
            <div
              class="text-capitalize main-title text-center position-relative mt-3 mb-2"
            >
              <h3 class="position-relative pb-1 white-color">
                Growth insights
              </h3>
            </div>
            <div
              class="contents mt-3 pt-2"
              v-for="growth in imgGrowth"
              :key="growth.title"
            >
              <h2 class="mt-3 m-2 mx-2 white-color text-capitalize">
                {{ growth.title }}
              </h2>
              <p
                class="bold-text mt-3 mb-2 text-capitalize white-color"
                style="margin-left: 10px"
              >
                {{ growth.content }}
              </p>
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
    tabs: {
      img: require("@/assets/growthInsi/slider-tabs/img_6756.png"),
    },
    dialog: false,
    images: [
      {
        img: require("@/assets/growthInsi/slider-tabs/img_6756.png"),
      },
      {
        img: require("@/assets/growthInsi/slider-tabs/img_6754.png"),
      },
      {
        img: require("@/assets/growthInsi/slider-tabs/img_6755.png"),
      },
      {
        img: require("@/assets/growthInsi/slider-tabs/img_6753.png"),
      },
    ],
    imgGrowth: [
      {
        title: "Market Research & Analysis.",
        content:
          "We conduct in-depth market research to understand industry trends,customer behaviors, and competitive dynamics.",
      },
      {
        title: "customer. Insights",
        content:
          "Understanding your customer is crucial to your business success.  We analyze customer. data to gain insights into",
      },
    ],
  }),
};
</script>
<style scoped lang="scss">
.gowrth-insi {
  padding: 0px 0.5px;
}
.img {
  position: relative;
  img {
    cursor: pointer;
  }
  .quick-view {
    position: absolute;
    top: -300px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    border-radius: 10px;
    transition: all 0.2s ease-in;
    opacity: 0;
    color: #01f28d;
    background: #071119;
  }
}
.img:hover {
  .quick-view {
    opacity: 1 !important;
  }
}
@media (max-width: 591px) {
  .quick-view {
    top: -150px !important;
  }
}
@media (max-width: 768px) {
  .resv {
    flex-direction: column-reverse !important;
  }
}
</style>
