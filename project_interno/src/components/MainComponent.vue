<template lang="">
  <main class="main">
    <AboutComponent></AboutComponent>
    <PromoComponent></PromoComponent>
    <ArticleComponent></ArticleComponent>

  </main>
</template>
<script>
import AboutComponent from './AboutComponent.vue'
import PromoComponent from './PromoComponent.vue'
import ArticleComponent from './ArticleComponent.vue'

export default {
  name: "MainComponent",
  components: {
    AboutComponent,
    PromoComponent,
    ArticleComponent
  }
}
</script>
<style lang="">
  
</style>