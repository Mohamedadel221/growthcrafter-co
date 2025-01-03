<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      location="left"
      temporary
      v-model="drawer"
      width="300"
      color="#071119"
    >
      <div
        class="text-and-close d-flex mt-3 mb-2 justify-space-between align-center"
      >
        <h3 class="text-capitalize white-color px-2">growth crafterco</h3>
        <v-icon @click="drawer = !drawer" class="text-error px-2"
          >mdi-close</v-icon
        >
      </div>
      <div class="btns d-flex justify-center align-center mt-10">
        <ul class="">
          <li class="mt-3 mb-2 mx-2">
            <v-btn
              class="text-capitalize"
              @click="$router.push({ name: 'home' })"
              >home</v-btn
            >
          </li>
          <li class="mt-3 mb-2 mx-1">
            <v-btn
              class="text-capitalize"
              @click="$router.push({ name: 'our-work' })"
              >our work</v-btn
            >
          </li>
          <li class="mt-3 mb-2">
            <v-btn
              class="text-capitalize mx-4"
              @click="$router.push({ name: 'contact-us' })"
              >contact</v-btn
            >
          </li>
          <li class="mt-3 mb-2 mx-2">
            <v-btn class="text-capitalize" href="https:///wa.me/+201124908446"
              >pricing</v-btn
            >
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    this.emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.menu-drawer {
  li {
    .v-btn {
      color: #e8fff5;
      font-size: 20px;
      background: none;
      box-shadow: none !important;
      margin: 10px;
    }
  }
}
</style>
