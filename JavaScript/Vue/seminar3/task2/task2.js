const app = Vue.createApp({})

app.component('to-do', {
  template: `
    <input type="text" v-model="toDoName">
    <button @click="addToDo">Add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}<button @click="deleteToDo(index)">delete</button></li>
    </ul>
    <input type="text" v-model="filterInput">
    <ul>
      <li v-for="(todo, index) in filterList" :key="index">{{ todo }}<button @click="deleteToDo(index)">delete</button></li>
    </ul>
  `,
  data() {
    return {
      todos: [
        "sleep",
        "eat",
        "drink",
        "repeat"
      ],
      toDoName: "",
      filterInput: "",
    };
  },
  methods: {
    addToDo() {
      this.todos.push(this.toDoName);
      this.toDoName = "";
    },
    deleteToDo(index) {
      this.todos.splice(index, 1);
    },
  },
  computed: {
    filterList() {
      if (!this.filterInput) {
        return this.todos;
      } else {
      return this.todos.filter(todo => todo.includes(this.filterInput));
      }
    }
  }
});

app.mount('#app');
