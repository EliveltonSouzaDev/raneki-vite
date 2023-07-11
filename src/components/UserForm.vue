<template>
  <form>
    <label for="nome">Nome</label>
    <input id="nome" v-model="nome" name="nome" type="text" />
    <label for="email">Email</label>
    <input id="email" v-model="email" name="email" type="email" />
    <label for="senha">Senha</label>
    <input id="senha" v-model="senha" name="senha" type="password" />
    <label for="cep">Cep</label>
    <input id="cep" v-model="cep" name="cep" type="text" @keyup="preencherCep" />
    <label for="rua">Rua</label>
    <input id="rua" v-model="rua" name="rua" type="text" />
    <label for="numero">Numero</label>
    <input id="numero" v-model="numero" name="numero" type="text" />
    <label for="bairro">Bairro</label>
    <input id="bairro" v-model="bairro" name="bairro" type="text" />
    <label for="cidade">Cidade</label>
    <input id="cidade" v-model="cidade" name="cidade" type="text" />
    <label for="estado">Estado</label>
    <input id="estado" v-model="estado" name="estado" type="text" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from '@/helpers.js';
import { getCep } from '@/services.js';

export default {
  data() {
    return {
      adress: {},
    };
  },
  computed: {
    ...mapFields({
      fields: ['nome', 'email', 'senha', 'rua', 'cep', 'numero', 'bairro', 'cidade', 'estado'],
      base: 'usuario',
      mutation: 'UPDATE_USUARIO',
    }),
  },
  watch: {
    adress(e) {
      this.rua = e.logradouro;
      this.bairro = e.bairro;
      this.estado = e.uf;
      this.cidade = e.localidade;
    },
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, '');
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.adress = response.data;
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
