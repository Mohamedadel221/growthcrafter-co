<template>
  <div class="home">
    <TwoVideos />
    <PartenrLogo />
    <PhotoGraphy />
    <SocialMedia />
    <VideoBts />
    <CountersClient />
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
import CountersClient from "@/components/homepage/CountersClient.vue";
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
    CountersClient,
    GrowthInsi,
    WhyChoses,
  },
};
</script>
