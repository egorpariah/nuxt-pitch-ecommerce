<template>
  <div>
    <transition-group
      class="list"
      name="products-list"
      ><ProductItem
        class="product"
        v-for="product in products"
        :key="product.id"
        :product="product"
        @like="$emit('like', $event)"
        @remove="$emit('remove', $event)"
      />
    </transition-group>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue';
  export default {
    components: { ProductItem },
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .product {
    flex-grow: 0;
    margin-bottom: 16px;
    width: 23%;
    margin-right: 2.66%;

    &:nth-child(4n) {
      margin-right: 0;
    }

    @include md {
      width: 48%;
      margin-right: 2%;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    @include xs {
      width: 100%;
      margin-right: 0;
    }
  }

  .products-list-item {
    display: inline-block;
    margin-right: 0px;
  }

  .products-list-enter-active,
  .products-list-leave-active {
    transition: all 0.3s ease;
  }

  .products-list-enter-from,
  .products-list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .products-list-move {
    transition: transform 0.3s ease;
  }
</style>
