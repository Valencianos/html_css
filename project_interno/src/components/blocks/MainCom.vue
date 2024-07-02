<template lang="">
  <main class="main">
    <AboutCom></AboutCom>
    <PromoCom></PromoCom>
    <ArticleCom></ArticleCom>
  </main>
</template>
<script>
import AboutCom from './AboutCom.vue'
import PromoCom from './PromoCom.vue'
import ArticleCom from './ArticleCom.vue'

export default {
  name: "MainCom",
  components: {
    AboutCom,
    PromoCom,
    ArticleCom
  }
}
</script>
<style lang="scss">
  .main {
    margin-bottom: 33px;
  }
</style>