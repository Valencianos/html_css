<template lang="">
  <a v-for="link in linkList" :key="link.id" href="#" class="nav__links">{{ link.name }}</a>
</template>
<script>
export default {
  data() {
    return {
      linkList: [
        { id: 1, name: "Home", link: "#" },
        { id: 2, name: "Pages", link: "#" },
        { id: 3, name: "Services", link: "#" },
        { id: 4, name: "Project", link: "#" },
        { id: 5, name: "Blog", link: "#" },
        { id: 6, name: "Contact", link: "#" },
      ],
    }
  },
}
</script>
<style lang="scss">
  .nav__links {
    font-family: "Jost", sans-serif;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: #292f36;
  }
</style>