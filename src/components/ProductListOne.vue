<template lang="html">
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product,item) in products" :key="item">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([
      'products',
    ]),
  },
  methods: {
    ...mapActions([
      'reducePrice',
    ]),

  },
};
</script>

<style lang="css">

</style>
