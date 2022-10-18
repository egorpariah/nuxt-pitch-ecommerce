<template>
  <header class="navbar">
    <div class="container">
      <NuxtLink
        class="title"
        to="/"
        >Nuxt eCommerce</NuxtLink
      >
      <nav class="pages">
        <NuxtLink
          class="link"
          to="/catalog"
          >Каталог</NuxtLink
        >
        <NuxtLink
          class="link"
          to="/favourites"
          >Избранное</NuxtLink
        >
      </nav>
      <BaseButton
        @click="logout"
        class="logout button--small button--inverted"
        to="/"
        >Выйти
      </BaseButton>
    </div>
  </header>
</template>

<script>
  import BaseButton from './UI/BaseButton.vue';
  export default {
    name: 'NavBar',
    components: { BaseButton },
    methods: {
      async logout() {
        await this.$auth.logout();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;
    align-items: center;
    min-height: 60px;
  }

  .title {
    font-weight: bold;
    margin-right: 32px;
  }

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .pages {
    margin-right: auto;
  }

  .link {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
</style>
