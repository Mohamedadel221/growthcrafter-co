<template>
  <div class="intro position-relative mt-0 pt-0 mb-0 pb-0" v-if="intro">
    <div class="main-video-graphy position-relative mt-0 mb-0">
      <div class="videogrpahy">
        <video autoplay muted loop playsinline class="videogrpahy">
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
  <div class="home" v-if="content">
    <TwoVideos />
    <PartenrLogo />
    <PhotoGraphy />
    <SocialMedia />
    <VideoBts />
    <!-- <CountersClient /> -->
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
// import CountersClient from "@/components/homepage/CountersClient.vue";
import GrowthInsi from "@/components/homepage/GrowthInsi.vue";
import WhyChoses from "@/components/homepage/WhyChoses.vue";

export default {
  name: "HomeView",
  components: {
    TwoVideos,
    PartenrLogo,
    PhotoGraphy,
    SocialMedia,
    VideoBts,
    // CountersClient,
    GrowthInsi,
    WhyChoses,
  },
  data: () => ({
    intro: false,
    content: true,
  }),
};
</script>
<style lang="scss" scoped>
.main-video-graphy {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  .videogrpahy {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
