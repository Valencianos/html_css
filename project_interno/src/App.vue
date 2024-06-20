<template>
  <HeaderComponent></HeaderComponent>
  <MainHeroComponent></MainHeroComponent>
  <MainComponent></MainComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainHeroComponent from './components/MainHeroComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainHeroComponent,
    MainComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">
@import url(../src/assets/styles/style.css);
</style>
