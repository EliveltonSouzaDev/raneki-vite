<template>
  <section>
    <h2>Create Your Account</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Create Account</button>
      <UserForm v-else>
        <button class="btn btn-form" @click.prevent="createUser">Create User</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'LoginCreate',
  components: {
    UserForm,
  },
  date() {
    return {
      create: false,
    };
  },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        await this.$store.dispatch('getUser', this.$store.state.user.email);
        this.$router.push({ name: 'username' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
