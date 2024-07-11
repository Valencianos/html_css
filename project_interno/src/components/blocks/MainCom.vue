<template>
  <main class="main">
    <AboutCom></AboutCom>
    <PromoCom></PromoCom>
    <ArticleCom ></ArticleCom>
  </main>
</template>
<script>
import AboutCom from './ProjectCom.vue'
import PromoCom from './PromoCom.vue'
import ArticleCom from './ArticleCom.vue'


export default {
  name: "MainCom",
  components: {
    AboutCom,
    PromoCom,
    ArticleCom
  },

}
</script>
<style lang="scss">
  .main {
    margin-bottom: 33px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .articles {
    &__box {
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }
    &__title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 50px;
      line-height: 1.25;
      letter-spacing: 0.02em;
      color: #292f36;
    }
    &__text {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      color: #4d5053;
      margin-bottom: 52px;
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 27px;
      justify-content: space-between;
    }
  }
</style>