<template>
  <div class="three-img mt-3">
    <div
      class="text-capitalize main-title text-center position-relative mt-3 mb-5"
    >
      <h3 style="font-size: 20px" class="white-color position-relative pb-1">
        native webstie & E-commerce websites
      </h3>
    </div>
    <div class="desciri-title">
      <p class="text-capitalize white-color bold-text text-center mt-3 mb-2">
        Our data-driven approach ensures that your ads are seen by the right
        people, at the right time, in the right context
      </p>
      <p class="text-capitalize white-color bold-text text-center mt-3 mb-2">
        We utilize programmatic and native advertising to deliver personalized
        content to your audience
      </p>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="5" sm="5" lg="5">
          <div
            class="parent-column"
            v-for="textAndImg in largImg"
            :key="textAndImg.title"
          >
            <img class="w-100" loading="lazy" :src="textAndImg.img" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="7" sm="7" lg="7">
          <div class="img-our-work" v-for="img in threeImg" :key="img.img">
            <img class="w-100" :src="img.img" alt="" />
            <div class="overlay">
              <a class="text-capitalize" :href="img.href" target="_blank">{{
                img.title
              }}</a>
            </div>
          </div>
          <v-row>
            <v-col
              cols="6"
              md="6"
              sm="6"
              lg="6"
              v-for="img in twoImg"
              :key="img.imgs"
            >
              <div class="img-our-work mt-3">
                <img loading="lazy" class="w-100" :src="img.imgs" alt="" />
                <div class="overlay">
                  <a class="text-capitalize" :href="img.href" target="_blank">{{
                    img.title
                  }}</a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    largImg: [
      {
        img: require("@/assets/our-serv/img_6123.jpg"),
      },
    ],
    threeImg: [
      {
        img: require("@/assets/our-serv/img-2.png"),
        title: "see website",
        href: "https://novenccieg.com/",
      },
    ],
    twoImg: [
      {
        imgs: require("@/assets/our-serv/img-1.png"),
        title: "see website",
        href: "https://rimini-co.com/",
      },
      {
        imgs: require("@/assets/our-serv/img-3.png"),
        title: "see website",
        href: "https://vivifyuae.com/",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.img-our-work {
  position: relative;
  .overlay {
    a {
      color: #fff;
      border: 2px solid #2bae91;
      padding: 5px 10px;
      font-size: 15px;
      border-radius: 4px;
      transition: 0.5s;
      text-decoration: none;
    }
  }
  img {
    cursor: pointer;
  }
}

.img-our-work .overlay a:hover {
  background: #2bae91;
}
.img-our-work {
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    transform: scale(1.05);
    transition: transform 0.5s ease;
  }
}
.img-our-work:hover img {
  transform: scale(1);
  transition: 0.4s;
}

.img-our-work:hover .overlay {
  opacity: 1;
  transform: scale(1);
}
@media (max-width: 768px) {
  .desciri-title {
    p {
      font-size: 11px;
    }
  }
}
@media (max-width: 496px) {
  .main-title {
    h3 {
      font-size: 15px !important;
    }
  }
}
</style>
