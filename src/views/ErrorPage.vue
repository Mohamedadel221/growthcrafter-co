<template>
  <div class="error">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <img class="pb-0" src="@/assets/errorimg/errorimg.png" alt="" />
          <div class="content-error pt-0">
            <h1 class="text-error">Page Not Found</h1>
            <router-link :to="{ name: 'home' }">
              <v-btn
                class="mt-1 text-capitalize"
                variant="outlined"
                color="red"
                density="compact"
                width="200"
                height="45"
              >
                Back To Home Page
              </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Error-PageCompo",
};
</script>
<style scoped lang="scss">
.error {
  overflow: scroll hidden;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  .content-error {
    h1 {
      font-size: 70px;
    }
  }
  img {
    width: 500px;
    margin-bottom: -55px;
    position: relative;
    animation: opcimg 0.5s alternate infinite ease-in;
    transition: all 0.3s ease-in-out;
  }
}
@keyframes opcimg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 767px) {
  .error {
    min-height: 90vh;
    img {
      width: 300px !important;
      margin-bottom: -30px;
    }
  }
  .content-error {
    h1 {
      font-size: 35px !important;
    }
  }
}
a {
  text-decoration: none;
}
</style>
