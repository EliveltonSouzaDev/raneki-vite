<template>
  <section>
    <div v-if="product" class="product">
      <ul v-if="product.photos" class="photos">
        <li v-for="(photo, index) in product.photos" :key="index">
          <img :src="photo.src" :alt="photo.title" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <button v-if="product.sold === 'false'" class="btn">Buy</button>
        <button v-else class="btn" disabled>Product Vendiro</button>
      </div>
    </div>
    <loading-page v-else />
  </section>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'Product',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  date() {
    return {
      product: null,
    };
  },
  created() {
    this.getProduct();
    console.log(this.product, this.id, 'created');
  },
  methods: {
    getProduct() {
      api.get(`/product/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #ff8b13;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
