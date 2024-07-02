<template lang="">
  <section class="promo">
    <div class="container">
      <div class="promo__wrapper">
        <div class="promo__box" v-for="promo in promos" :key="promo.id">
          <p class="promo__selection">{{ promo.qty }}</p>
          <p class="promo__text">{{ promo.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PromoCom",
  data() {
    return {
      promos: [
        {
          id: 1,
          qty: 12,
          desc: 'Years Of Experiance'
        },
        {
          id: 2,
          qty: 85,
          desc: 'Success Project'
        },
        {
          id: 3,
          qty: 15,
          desc: 'Active Project'
        },
        {
          id: 4,
          qty: 95,
          desc: 'Happy Customers'
        }
      ]
    }
  },
}
</script>
<style lang="scss">
  .container {
  max-width: 1200px;
  margin: 0 auto;
}

.promo {
  background-color: #f4f0ec;
  margin-bottom: 96px;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: center;
    padding: 151px 0 151px;
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #cda274;
    &:first-child {
      border-left: none;
    }
  }
  &__text {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: #4d5053;
    margin: 0;
  }
  &__selection {
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 85px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    color: #cda274;
    margin: 0;
  }
}
</style>