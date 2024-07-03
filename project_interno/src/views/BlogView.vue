<template>
  <div>
    <HeaderCom></HeaderCom>
    <section class="post">
      
    </section>
    <ArticleCom></ArticleCom>
    <FooterCom></FooterCom>
  </div>
</template>
<script>
import HeaderCom from '../components/blocks/HeaderCom.vue';
import FooterCom from '../components/blocks/FooterCom.vue';

export default {
  name: 'BlogView',
  components: {
    HeaderCom,
    FooterCom,
  }
}
</script>
<style lang="scss">
  
</style>