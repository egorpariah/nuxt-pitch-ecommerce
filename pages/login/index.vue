<template>
  <div class="login">
    <LoginForm @submit="login" />
  </div>
</template>

<script>
  import LoginForm from '../../components/LoginForm.vue';
  export default {
    layout: 'login',
    components: { LoginForm },
    methods: {
      async login(credentials) {
        try {
          await this.$auth.loginWith('local', {
            data: credentials,
          });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
</style>
