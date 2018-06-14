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
  props: {
    products: {
      type: Object,
      default() {
        const d = { name: 'Banana Skiin', price: 20 };
        return d;
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="css">
</style>
