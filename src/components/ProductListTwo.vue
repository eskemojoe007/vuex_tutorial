
<template lang="html">
  <div id="product-list-two">
    <h2>Product List Two - Sale Items</h2>
    <ul>
      <li
        v-for="(product,item) in saleProducts"
        :key="item">
        {{ product.name }} - {{ product.price }}$
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import { mapState, mapGetters } from 'vuex';


export default {
  computed: {
    ...mapState(['products']),
    ...mapGetters(['saleProducts']),
  },
  // Vuex.mapGetters(['saleProducts']),
  // products() {
  //   return this.$store.state.products;
  // },

};
</script>

<style lang="css">
</style>
