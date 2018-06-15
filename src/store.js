import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      const saleProducts = state.products.map(product => ({
        name: `**${product.name}**`,
        price: product.price / 2,
      }));
      return saleProducts;
    },
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        product.price -= payload;
      });
    },
    /* eslint-disable no-param-reassign */
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload);
      }, 2000);
    },
  },
});
