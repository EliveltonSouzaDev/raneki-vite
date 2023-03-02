<template>
  <section class="products-container">
    <transition mode="out-in">
      <div v-if="products" key="products" class="products">
        <div v-for="(product, index) in products" :key="index" class="product">
          <router-link :to="{ name: 'produto', params: { id: product.id } }">
            <img v-if="products.fotos" :src="product.fotos[0]" :alt="product.fotos[0].titulo" />
            <h1>{{ product.nome }}</h1>
            <p class="price">R$ {{ product.preco }}</p>
            <p class="title">{{ product.descricao }}</p>
          </router-link>
        </div>
        <PagesProducts :total-products="totalProducts" :products-per-page="productsPerPage" />
      </div>
      <div v-else-if="products?.length === 0" key="no-results">
        <p class="no-results">Busca sem resultados. Tente buscar outro termo.</p>
      </div>
      <loading-page v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import { api } from '@/services.js';
import PagesProducts from '@/components/PagesProducts.vue';
import { serialize } from '@/helpers.js';

export default {
  components: {
    PagesProducts,
  },
  data() {
    return {
      products: null,
      totalProducts: 0,
      productsPerPage: 9,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.productsPerPage}${query}`;
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.products = null;
      api.get(this.url).then((response) => {
        this.totalProducts = Number(response.headers['x-total-count']);
        this.products = response.data;
      });
    },
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: rgb(248, 142, 12);
  font-weight: bold;
}

.no-results {
  text-align: center;
  color: red;
}
</style>
