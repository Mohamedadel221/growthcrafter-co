<template>
  <div class="two-img mt-5">
    <v-container fluid>
      <v-row>
        <v-col col="6" v-for="imgs in twoImg" :key="imgs.img">
          <img
            class="w-100 wow animate__animated animate__fadeIn"
            :src="imgs.img"
            alt=""
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    twoImg: [
      {
        img: require("@/assets/our-serv/img_6106.jpg"),
      },
      {
        img: require("@/assets/our-serv/img_6124.jpg"),
      },
    ],
  }),
};
</script>

<style scoped lang="scss"></style>
