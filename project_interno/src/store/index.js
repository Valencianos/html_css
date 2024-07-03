import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // начальное состояние
  },
  mutations: {
    //методы для изменения состояния
  },
  actions: {
    // методы для асинхронных операций
  },
  getters: {
    // методы для чтения состояния
  },
  modules: {
    //модули Vuex для разделения хранилища на под-хранилища
  },

})

export default store