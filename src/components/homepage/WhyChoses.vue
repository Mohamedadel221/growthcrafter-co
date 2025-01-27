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
                class="w-100"
                src="@/assets/whycho/3.jpg"
                alt=""
              />
            </div>
            <div class="grid grid-2">
              <img
                lazy="loading"
                class="w-100"
                src="@/assets/whycho/2.jpg"
                alt=""
              />
            </div>
            <div class="grid grid-3">
              <img
                lazy="loading"
                class="w-100"
                src="@/assets/whycho/1.jpg"
                alt=""
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="5">
          <div
            class="content-about-grid"
            v-for="conAbout in contentAbout"
            :key="conAbout.title"
          >
            <div class="title-grid-three-img">
              <h2 class="text-capitalize white-color mb-2 text-center">
                {{ conAbout.title }}
              </h2>
            </div>
            <div class="content-grid-three-img mt-3 mb-2">
              <p class="text-capitalize white-color bold-text">
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
              elavation="0"
              @click="$router.push({ name: 'our-work' })"
              >see more</v-btn
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
        title: "why should you growth Crafterco",
        descrip:
          "At Growth Crafters, we are committed to driving your business growth with a comprehensive suite of services tailored to meet the unique needs of your brand. Our expertise spans across various aspects of business development, digital marketing, and creative solutions.",
      },
      {
        title: "Data Analysis",
        descrip:
          "in today’s data-driven world, understanding and utilizing data is key to making informed decisions that propel your business forward. At Growth Crafters, we offer comprehensive data analysis services that transform raw data into actionable insights. Here’s how we do it.",
      },
      {
        title: "Data Collection",
        descrip:
          "We gather data from various sources, including digital platforms, customer interactions, and market trends, to ensure a holistic view of your business landscape.",
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
