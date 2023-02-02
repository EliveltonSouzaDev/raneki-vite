<template>
  <section>
    <h1>Find the best products</h1>
    <ProductsSearch />
    <ProductsList />
  </section>
</template>

<script>
import ProductsSearch from '@/components/ProductsSearch.vue';
import ProductsList from '@/components/ProductsList.vue';

export default {
  name: 'Home',
  components: {
    ProductsSearch,
    ProductsList,
  },
};
</script>

<style scoped>
h1 {
  color: #38a667;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  font-weight: bold;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
</style>
