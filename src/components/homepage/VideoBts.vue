<template>
  <div class="video-bts mt-3">
    <div
      class="text-capitalize main-titles text-center position-relative mt-3 mb-5"
    >
      <h3 class="white-color position-relative pb-1">
        Commercial & advertising videography
      </h3>
    </div>
    <div class="video-graphy position-relative mt-3 pt-0 mb-0 pb-0">
      <div class="main-video-graphy position-relative mt-5 mb-2">
        <div class="videogrpahy">
          <video autoplay muted loop playsinline class="videogrpahy">
            <source src="/videos/videobts.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.video-bts {
  padding: 0px 17.5px;
}
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
.main-titles {
  position: relative;
  h3 {
    font-size: 28px;
    &::after {
      content: "";
      position: absolute;
      top: 110%;
      width: 15%;
      right: 43%;
      height: 2%;
      border: 2px solid #01f28d;
    }
  }
}
@media (max-width: 620px) {
  .main-titles {
    position: relative;
    h3 {
      font-size: 16px;
    }
  }
}
@media (max-width: 476px) {
  .main-titles {
    h3 {
      &::after {
        width: 60%;
        right: 20%;
      }
    }
  }
}
</style>
