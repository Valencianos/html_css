<template>
  <div>
    <!-- <AuthentificationComp></AuthentificationComp> -->
    <CartComponent></CartComponent>
  </div>
</template>

<script>
// import AuthentificationComp from './components/AuthentificationComp.vue';
import CartComponent from './components/CartComponent.vue';

export default {
  name: 'App',
  components: {
    // AuthentificationComp,
    CartComponent,
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
