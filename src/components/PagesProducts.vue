<template>
  <ul v-if="totalPages > 1">
    <li v-for="page in pages" :key="page">
      <router-link :to="{ query: query(page) }">{{ page }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    productsPerPage: {
      type: Number,
      default: 1,
    },
    totalProducts: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages() {
      const current = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);

      return pagesArray;
    },
    totalPages() {
      const total = this.totalProducts / this.productsPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page,
      };
    },
  },
};
</script>

<style>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
