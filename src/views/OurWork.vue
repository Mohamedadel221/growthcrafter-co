<template>
  <div class="our-work">
    <TextandImg />
    <IconServices />
    <ThreeImg />
    <TwoImg />
    <CreativeMarket />
  </div>
</template>

<script>
import TextandImg from "@/components/ourworkpage/TextandImg.vue";
import IconServices from "@/components/ourworkpage/IconServices.vue";
import ThreeImg from "@/components/ourworkpage/ThreeImg.vue";
import TwoImg from "@/components/ourworkpage/TwoImg.vue";
import CreativeMarket from "@/components/ourworkpage/CreativeMarket.vue";
import { WOW } from "wowjs";
export default {
  components: {
    TextandImg,
    IconServices,
    ThreeImg,
    TwoImg,
    CreativeMarket,
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style scoped lang="scss"></style>
