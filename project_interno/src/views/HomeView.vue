<template>
  <div class="home">
    <BannerCom></BannerCom>
    <MainCom></MainCom>
  </div>
</template>

<script>
import MainCom from '../components/blocks/MainCom.vue';
import BannerCom from '../components/blocks/BannerCom.vue';

export default {
  name: 'HomeView',
  components: {
    BannerCom,
    MainCom
  }
}
</script>
