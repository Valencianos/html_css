<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <input type="number" v-model="product.quantity">
      <p>Price: {{ product.price }}</p>
      <p>Subtotal: {{ product.price * product.quantity }}</p>
    </div>
    <h3>Total: {{ totalSum }}</h3>
  </div>
</template>
<script>

export default {
  name: "CartComponent",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          quantity: 8,
          price: 10
        },
        {
          id: 2,
          name: "Product 2",
          quantity: 2,
          price: 20
        },
        {
          id: 3,
          name: "Product 3",
          quantity: 3,
          price: 30
        }
      ],
    }
  },
  computed: {
    totalSum () {
      return this.products.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)
    }
  },
}
</script>
<style lang="scss">
  
</style>

<!-- Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически пересчитывать стоимость каждого товара и обновлять 
общую сумму покупки. -->