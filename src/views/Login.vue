<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input id="email" v-model="login.email" type="email" name="email" />
      <label for="password">Password</label>
      <input id="password" v-model="login.password" type="password" name="password" />
      <button class="btn" @click.prevent="login">Login</button>
    </form>
    <p class="lost">
      <a href="/" target="_blank">Lost your password? Click here.</a>
    </p>
    <LoginCreate />
  </section>
</template>

<script>
import LoginCreate from '@/components/LoginCreate.vue';

export default {
  name: 'Login',
  components: {
    LoginCreate,
  },
  date() {
    return {
      Login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('getUser', this.login.email);
      this.$router.push({ name: 'user' });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #38a667;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.lost {
  text-align: center;
  margin: 20px auto 0 auto;
}

.lost a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
