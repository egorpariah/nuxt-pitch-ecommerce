<template>
  <button
    @click="$emit('click')"
    class="button"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
  };
</script>

<style lang="scss" scoped>
  .button {
    height: 40px;
    font-size: 14px;
    color: #ffffff;
    background: $darkPurple;
    padding: 12px 40px;
    border-radius: 20px;

    &:hover {
      color: $darkPurple;
      border: 1px solid $darkPurple;
      background: transparent;
    }

    &--small {
      padding: 8px 20px;
      height: 32px;
    }

    &--inverted {
      color: $darkPurple;
      border: 1px solid $darkPurple;
      background: transparent;

      &:hover {
        background: $darkPurple;
        color: #ffffff;
      }
    }
  }
</style>
