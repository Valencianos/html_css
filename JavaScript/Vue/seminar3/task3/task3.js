const app = Vue.createApp({})

app.component('render-products', {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  template: `
    <h1>Product List</h1>
    <button @click="sortAs">assending</button>
    <button @click="sortDes">descending</button>
    <ul>
      <li v-for="product in products" :key="product.id">Name - {{ product.title }} Price - {{ product.price }}</li>
    </ul>
    <button>Reset Sort</button>
  `,
  data() {
    return {
      products: [
        {
          id: 1,
          title: "ELLERY X M'O CAPSULE",
          price: 52
        },
        {
          id: 2,
          title: "ELLERY X M'O CAPSULE",
          price: 65
        },
        {
          id: 3,
          title: "ELLERY X M'O CAPSULE",
          price: 57
        },
        {
          id: 4,
          title: "ELLERY X M'O CAPSULE",
          price: 80
        },
      ],
      filerDirection: "asc"
    };
  },
  methods: {
    sortAs() {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      })
    },
    sortDes() {
      this.products.sort(function (a, b) {
        return b.price - a.price;
      })
    }
  },
  computed: {

  }
});

app.mount('#app');