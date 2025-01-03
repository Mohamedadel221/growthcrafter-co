<template>
  <div class="error">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <img class="pb-0" src="@/assets/errorimg/errorimg.png" alt="" />
          <div class="content-error pt-0">
            <h1 style="font-size: 30px" class="white-color">Page Not Found</h1>
            <router-link :to="{ name: 'home' }">
              <v-btn class="mt-1 text-capitalize" color="green">
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
  background: #cc1a0d67;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  img {
    width: 500px;
  }
}
.content-error {
  margin-left: 117px;
}
@media (max-width: 620px) {
  .error {
    img {
      width: 300px !important;
    }
  }
  .content-error {
    margin-left: 30px;
    h1 {
      font-size: 23px !important;
    }
  }
}
a {
  text-decoration: none;
}
</style>
