<template>
  <section>
    <h2>Add Product</h2>
    <ProductAdd />
    <h2>Your Products</h2>
    <transition-group v-if="product_user" name="list" tag="ul">
      <li v-for="product in product_user" :key="product.description">
        <ProductItem :product="product">
          <p>{{ product.description }}</p>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductAdd from '@/components/ProductAdd.vue';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'UserProducts',
  components: {
    ProductAdd,
    ProductItem,
  },
  computed: {
    ...mapState(['login', 'user', 'product_user']),
  },
  watch: {
    Login() {
      this.getUserProducts();
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
  methods: {
    ...mapActions(['getUserProducts']),
  },
};
</script>
<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
