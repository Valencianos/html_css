<template>
  <section class="banner">
    <img class="banner__img" :src='bannerImgUrl'>
    <div class="banner__text" v-if="bannerTitle">
      <h2 class="banner__text_title">{{ bannerTitle }}</h2>
      <p class="banner__text_subtitle">{{ bannerSubtitle }}</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TitleImage',
  props: {
    bannerImgUrl: String,
    bannerTitle: String,
    bannerSubtitle: String
  }
}
</script>
<style lang="scss">
  .banner {
    position: relative;
    margin-bottom: 200px;
    &__img {
      width: 100%;
      height: 356px;
    }
    &__text {
      position: absolute;
      bottom: 0;
      left: calc(50% - 250px);
      background: #fff;
      border-radius: 37px 37px 0 0;
      padding: 41px 78px;
      text-align: center;
      &_title {
        font-family: "DM Serif Display", sans-serif;
        font-weight: 400;
        font-size: 50px;
        color: #292f36;
    }
      &_subtitle {
        font-family: "Jost", sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: #4d5053;
      }
    }
  }
</style>