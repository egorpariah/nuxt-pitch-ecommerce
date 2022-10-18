<template>
  <div class="pad">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BasePad',
  };
</script>

<style lang="scss" scoped>
  .pad {
    background: #ffffff;
    padding: 20px;
    border-radius: 16px;
  }
</style>
