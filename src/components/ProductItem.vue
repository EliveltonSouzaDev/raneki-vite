<template>
  <div v-if="product" class="product">
    <router-link class="product-img" :to="{ name: 'product', params: { id: product.id } }">
      <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title" />
      <p>View Product</p>
    </router-link>
    <div class="info">
      <p class="price">{{ product.price | numberPrice }}</p>
      <h2 class="title">{{ product.name }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: flex-end;
}

.product-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style>
