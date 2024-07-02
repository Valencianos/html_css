<template>
  <div>
    <ProductDetailsComp></ProductDetailsComp>
  </div>
</template>

<script>
import ProductDetailsComp from './components/ProductDetailsComp'

export default {
  name: 'App',
  components: {
    ProductDetailsComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
