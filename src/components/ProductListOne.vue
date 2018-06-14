<template lang="html">
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product,item) in products" :key="item">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
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
