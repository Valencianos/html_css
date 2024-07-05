<template>
  <div class="nav__right">
    <div class="nav__links" v-for="link in linkList" :key="link.id"><router-link :to="link.link">{{ link.name }}</router-link></div>
    <div class="nav__search">
      <input type="text" class="nav__search_text" placeholder="Search..." />
      <a class="nav__search_btn">
        <svg width="24" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
        <path d="M16.6835 17.1844L21.9992 22.5001M19.3749 10.6875C19.3749 15.7616 15.2615 19.875 10.1874 19.875C5.11326 19.875 0.999878 15.7616 0.999878 10.6875C0.999878 5.61338 5.11326 1.5 10.1874 1.5C15.2615 1.5 19.3749 5.61338 19.3749 10.6875Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g></svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      linkList: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Pages", link: "/blog-detail" },
        { id: 3, name: "Services", link: "/services" },
        { id: 4, name: "Project", link: "/project" },
        { id: 5, name: "Blog", link: "/blog" },
        { id: 6, name: "Contact", link: "/contact" },
      ],
    }
  },
}
</script>
<style lang="scss">
.nav {
  &__right {
      display: flex;
      align-items: center;
      gap: 40px;
    }
  &__links {
    font-family: "Jost", sans-serif;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: #292f36;
    text-decoration: none;
  }
  &__search {
    display: flex;
    height: 32px;
    border-radius: 10px;
    padding: 4px;
    cursor: pointer;
    &:hover > .nav__search_text{
      width: 240px;
      padding: 0 6px;
    }
    &_btn {
      display: flex;
      justify-content: center;
      transition: 0.4s;
      align-items: center;
    }
    &_text {
      border: none;
      background: none;
      outline: none;
      padding: 0;
      font-size: 16px;
      color: #292f36;
      transition: 0.4s;
      line-height: 24px;
      width: 0;
    }
  }
}
</style>