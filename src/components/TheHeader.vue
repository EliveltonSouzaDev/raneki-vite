<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="Ranek" />
        <!-- <h1>YouTech</h1> -->
      </router-link>
      <router-link class="btn" to="/login">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
h1 {
  color: #38a667;
  font-size: 1.8rem;
  text-align: center;
  font-family: 'Anton', sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  font-weight: bold;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 11vw;
}
</style>
