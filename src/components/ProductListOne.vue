<template lang="html">
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product,item) in products" :key="item">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    reducePrice() {
      this.$store.commit('reducePrice');
      // this.$store.state.products.forEach((product) => {
      //   product.price -= 1
      // });
    },
  },
};
</script>

<style lang="css">

</style>
