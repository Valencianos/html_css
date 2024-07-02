<template lang="">
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__left">
          <LogoCom></LogoCom>
        </div>
        <div class="nav__right">
          <LinksCom></LinksCom>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import LogoCom from '../ui/LogoCom.vue';
import LinksCom from '../ui/LinksCom.vue';

export default {
  name: "HeaderCom",
  components: {
    LogoCom,
    LinksCom,
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
  }

  button {
    cursor: pointer;
  }

  .header {
    margin-top: 44px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 57px;
    &__right {
      display: flex;
      gap: 40px;
    }
  }
</style>