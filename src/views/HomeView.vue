<template>
  <div class="home">
    <TwoVideos />
    <PartenrLogo />
    <PhotoGraphy />
    <SocialMedia />
    <VideoBts />
    <GrowthInsi />
    <WhyChoses />
  </div>
</template>

<script>
import TwoVideos from "@/components/homepage/TwoVideo.vue";
import PartenrLogo from "@/components/homepage/PartenrLogo.vue";
import PhotoGraphy from "@/components/homepage/PhotoGraphy.vue";
import SocialMedia from "@/components/homepage/SocialMedia.vue";
import VideoBts from "@/components/homepage/VideoBts.vue";
import GrowthInsi from "@/components/homepage/GrowthInsi.vue";
import WhyChoses from "@/components/homepage/WhyChoses.vue";
import { WOW } from "wowjs";
export default {
  name: "HomeView",
  data: () => ({
    wowInstance: null,
  }),
  components: {
    TwoVideos,
    PartenrLogo,
    PhotoGraphy,
    SocialMedia,
    VideoBts,
    GrowthInsi,
    WhyChoses,
  },
  mounted() {
    this.wowInstance = new WOW();
    this.wowInstance.init();
    this.$nextTick(() => {
      this.wowInstance.sync();
    });
  },
};
</script>

<style lang="scss" scoped>
.main-video-graphy {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .videogrpahy {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
