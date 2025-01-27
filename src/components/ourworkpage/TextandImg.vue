<template>
  <div
    class="text-and-img mt-0 mb-3"
    v-for="content in textandImg"
    :key="content.title"
  >
    <v-container fluid>
      <v-row class="align-center">
        <v-col cols="12" md="6" sm="6" lg="6">
          <div class="text">
            <div class="title">
              <h1 class="text-capitalize text-center mt-3 mb-2 white-color">
                {{ content.title }}
              </h1>
            </div>
            <div class="description">
              <p class="text-capitalize mt-3 mb-2 white-color bold-text">
                {{ content.description }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="6" lg="6">
          <div class="text text-end">
            <div class="img">
              <img class="w-75" :src="content.img" alt="" />
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
    textandImg: [
      {
        title: "Where we Served",
        description:
          "Growth Crafters has served 20+ clients across Egypt, Saudi Arabia, UAE.We served E-commerce, Fashion,  Medical, interior design studios. . Growth Crafters has created more than 6000 social media designs, 20 video production, and 30 websites. . We managed more than $1  million in paid advertising budgets, with average ROAS of 5.7x. Across different channels ex: Google Search, YouTube, Facebook and Instagram, TikTok.",
        img: require("@/assets/map/Map-removebg-preview.png"),
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.text-and-img {
  background-color: #000;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  p {
    font-size: 19px;
  }
}
@media (max-width: 599px) {
  .description {
    p {
      font-size: 12px;
    }
  }
}
@media (min-width: 600px) and (max-width: 962px) {
  .description {
    p {
      font-size: 14px;
    }
  }
}
@media (min-width: 600px) and (max-width: 789px) {
  .description {
    p {
      font-size: 12px;
    }
  }
}
@media (max-width: 591px) {
  .img {
    img {
      display: flex !important;
      margin: auto !important;
    }
  }
}
</style>
