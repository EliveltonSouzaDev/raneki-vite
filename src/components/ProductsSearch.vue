<template>
  <div class="container-search">
    <form>
      <input id="search" v-model="search" name="search" type="text" placeholder="Buscar..." />
      <input
        id="lupa"
        :disabled="search.length > 3 ? false : true"
        type="submit"
        value="Buscar"
        @click.prevent="searchProducts"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    searchProducts() {
      if (this.search.length > 3) {
        this.$router.push({ query: { q: this.search } }).catch((err) => err);
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
