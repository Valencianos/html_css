const app = Vue.createApp({})

app.component('counter', {
  template: `
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <span>{{ count }}</span>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    }
  },
});

app.mount('#app');
