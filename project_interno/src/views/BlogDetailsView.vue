<template>
  <TitleImage 
    :bannerImgUrl=banner.bannerImgUrl
  ></TitleImage>
</template>
<script>
import TitleImage from '../components/ui/TitleImage.vue';
import blogDetailsImg from '../assets/img/Blog_details_banner.png';

export default {
  components: {
    TitleImage,
  },
  data() {
    return {
      banner: {
        bannerImgUrl: blogDetailsImg,
      },
    }
  },
}
</script>
<style lang="scss">
  
</style>