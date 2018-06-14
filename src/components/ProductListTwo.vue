<template lang="html">
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li
        v-for="(product,item) in products"
        :key="item">
        {{ product.name }} - {{ product.price }}$
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="css">
</style>
