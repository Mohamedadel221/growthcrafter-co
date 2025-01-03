<template>
  <div class="two-videos">
    <div class="desktop-videos">
      <div class="video-container d-flex justify-center align-center">
        <video autoplay muted loop playsinline class="video-background">
          <source src="/videos/desktop-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="mopile-video">
      <div class="mopile-video-container d-flex justify-center align-center">
        <video autoplay muted playsinline loop class="mopile-video-background">
          <source src="/videos/mopile-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
/*Two-Videos*/
.desktop-videos {
  position: relative;
  overflow: hidden;
  .video-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .video-background {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
/*Mopile-Video*/
.mopile-video {
  position: relative;
  overflow: hidden;

  .mopile-video-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .mopile-video-background {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
/*Mopile-Video*/
@media (min-width: 592px) {
  .mopile-video {
    display: none !important;
  }
}
@media (max-width: 591px) {
  .desktop-videos {
    display: none !important;
  }
}
/*Two-Videos*/
</style>
