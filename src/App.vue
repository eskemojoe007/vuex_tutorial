<template>
  <div id="app">
    <product-list-one :products='products'/>
    <product-list-two :products='products'/>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },
  data() {
    return {
      products: [
        { name: 'Banana Skiin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Shells', price: 80 },
      ],
    };
  },
};
</script>

<style>

</style>
