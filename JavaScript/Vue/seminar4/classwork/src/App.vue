<template>
  <div>
    <NewComponent></NewComponent>
    <GalleryComponent></GalleryComponent>
  </div>

</template>

<script lang="js">
import NewComponent from './components/NewComponent.vue'
import GalleryComponent from './components/GallleryComponent.vue'

export default {
  name: 'App',
  components: {
    NewComponent,
    GalleryComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
