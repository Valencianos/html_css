<template lang="">
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__left">
          <LogoComponent></LogoComponent>
        </div>
        <div class="nav__right">
          <a v-for="link in linkList" :key="link.id" href="#" class="nav__links">{{ link.name }}</a>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import LogoComponent from './LogoComponent.vue';

export default {
  name: "HeaderComponent",
  data() {
    return {
      linkList: [
        { id: 1, name: "Домой", link: "#" },
        { id: 2, name: "Проект", link: "#" },
        { id: 3, name: "Блог", link: "#" },
      ],
    }
  },
  components: {
    LogoComponent,
  }
}
</script>

<style lang="scss">

</style>