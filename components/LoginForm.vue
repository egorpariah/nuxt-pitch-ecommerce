<template>
  <BasePad class="pad">
    <form
      @submit.prevent="$emit('submit', credentials)"
      class="form"
    >
      <BaseInput
        class="form__input"
        v-model="credentials.username"
        inputLabel="Login"
        type="text"
      />
      <BaseInput
        class="form__input"
        v-model="credentials.password"
        inputLabel="Password"
        type="password"
      />
      <BaseButton type="submit">Login</BaseButton>
    </form>
  </BasePad>
</template>

<script>
  import BasePad from './UI/BasePad.vue';
  import BaseInput from './UI/BaseInput.vue';
  import BaseButton from './UI/BaseButton.vue';
  export default {
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        },
      };
    },
    name: 'LoginForm',
    components: { BasePad, BaseInput, BaseButton },
  };
</script>

<style lang="scss" scoped>
  .pad {
    min-width: 320px;
  }
  .form {
    display: flex;
    flex-direction: column;

    &__input {
      margin-bottom: 12px;

      &:last-of-type {
        margin-bottom: 32px;
      }
    }
  }
</style>
