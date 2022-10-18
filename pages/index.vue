<template>
  <div class="container">
    <h1 class="title">
      Демо-приложение<br />
      «Каталог интернет-магазина»
    </h1>
    <h2 class="subtitle">Реализовано:</h2>
    <ul class="list">
      <li class="item">
        Сделал авторизацию с помощью данных пользователя и возвращаемого
        сервером токена. Пользователю без авторизации доступна только страница
        логина.
      </li>
      <li class="item">
        SSR-приложение: сервер получает данные и рендерит шаблон приложения.
      </li>
      <li class="item">
        Динамическая пагинация в каталоге товаров и избранном.
      </li>
      <li class="item">
        Возможность добавлять товары в избранное, смотреть сохраненный список и
        удалять из него позиции.
      </li>
      <li class="item">Реализовал логаут.</li>
    </ul>

    <h2 class="subtitle">Технологии:</h2>
    <ul class="list">
      <li class="item">Nuxt</li>
      <li class="item">Vue 2</li>
      <li class="item">Vuex</li>
      <li class="item">nuxt/auth</li>
      <li class="item">JS</li>
      <li class="item">HTML</li>
      <li class="item">SCSS</li>
    </ul>
  </div>
</template>

<script>
  import BaseButton from '~/components/UI/BaseButton.vue';
  export default {
    components: { BaseButton },
    methods: {
      async logout() {
        await this.$auth.logout();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .title {
    font-size: 32px;
    color: $darkPurple;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 24px;
  }

  .subtitle {
    margin-bottom: 16px;
  }

  .list {
    color: $darkPurple;
    list-style: disc;
  }

  .item {
    margin-bottom: 8px;
  }

  .list {
    margin-bottom: 20px;
  }
</style>
