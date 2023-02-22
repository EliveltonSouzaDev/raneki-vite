<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input id="email" v-model="login.email" type="email" name="email" />
      <label for="senha">Senha</label>
      <input id="senha" v-model="login.senha" type="password" name="senha" />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from '@/components/LoginCriar.vue';

export default {
  name: 'Login',
  components: {
    LoginCriar,
  },
  data() {
    return {
      login: {
        email: '',
        senha: '',
      },
    };
  },
  methods: {
    logar() {},
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

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
