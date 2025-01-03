<template>
  <div class="upper-banner d-flex justify-center align-center">
    <v-container fluid>
      <v-row>
        <v-col col="12">
          <div class="text text-center">
            <h1 class="text-capitalize text-white mb-4">
              At Growth Crafters we're all about digital Our team <br />
              innovation of experts knows well crafted business <br />
              <span class="green-color">development</span>
            </h1>
            <v-btn
              color="#01F28D"
              class="text-capitalize"
              variant="outlined"
              density="compact"
              width="200"
              height="50"
              href="tel:+201124908446"
              p
              >contact us</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped lang="scss">
.text {
  h1 {
    font-size: 45px;
  }
}
.upper-banner {
  background-image: url("../../assets/homephoto/homebg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
@media (max-width: 1024px) {
  .text {
    h1 {
      font-size: 35px;
    }
  }
}
@media (max-width: 909px) {
  .text {
    h1 {
      font-size: 30px;
    }
  }
}
@media (max-width: 783px) {
  .text {
    h1 {
      font-size: 25px;
    }
  }
}
@media (max-width: 658px) {
  .text {
    h1 {
      font-size: 20px;
    }
  }
}
@media (max-width: 532px) {
  .text {
    h1 {
      font-size: 15px;
    }
  }
}
@media (max-width: 400px) {
  .text {
    h1 {
      font-size: 13px;
    }
  }
}
</style>
