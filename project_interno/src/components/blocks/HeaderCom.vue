<template lang="">
  <header class="header">
    <div class="container">
      <nav class="nav">
        <LogoCom></LogoCom>
        <LinksCom></LinksCom>
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
  button {
    cursor: pointer;
  }

  .header {
    margin-top: 44px;
    margin-bottom: 45px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>