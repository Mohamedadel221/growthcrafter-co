<template>
  <div class="whats-app-button d-flex justify-end" v-if="showBtn">
    <v-btn href="https:///wa.me/+201124908446" target="_blank"
      ><v-icon class="fade-icon">mdi-whatsapp</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    showBtn: false,
  }),
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    });
  },
};
</script>

<style scoped lang="scss">
.whats-app-button {
  position: relative;
  z-index: 1000 !important;
  .v-btn {
    color: #fff;
    background: #01f28ecf;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 4%;
  }
}
.fade-icon {
  position: relative;
  animation: fade 0.5s ease-in-out alternate infinite;
  transition: all 0.3s;
}
@keyframes fade {
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    opacity: 1;
    top: 5px;
  }
}
</style>
