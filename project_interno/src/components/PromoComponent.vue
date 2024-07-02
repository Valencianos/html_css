<template lang="">
  <section class="promo">
    <div class="promo__wrapper">
      <div class="promo__box" v-for="promo in promos" :key="promo.id">
        <p class="promo__selection">{{ promo.qty }}</p>
        <p class="promo__text">{{ promo.desc }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PromoComponent",
  data() {
    return {
      promos: [
        {
          id: 1,
          qty: 12,
          desc: 'Лет опыта'
        },
        {
          id: 2,
          qty: 85,
          desc: 'Успешных проектов'
        },
        {
          id: 3,
          qty: 15,
          desc: 'Проектов в работе'
        },
        {
          id: 4,
          qty: 95,
          desc: 'Счастливых клиентов'
        }
      ]
    }
  },
}
</script>
<style lang="">
  
</style>