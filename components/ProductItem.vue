<template>
  <div>
    <BasePad class="pad">
      <h3 class="name">{{ product.title || product.product.title }}</h3>
      <button
        @click="like()"
        class="like"
      >
        <svg-icon
          :class="{
            liked: isLiked,
          }"
          class="heart"
          name="heart"
        />
      </button>
    </BasePad>
  </div>
</template>

<script>
  import BasePad from '~/components/UI/BasePad.vue';

  export default {
    name: 'ProductItem',
    components: { BasePad },
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isLiked: false,
      };
    },
    methods: {
      like() {
        if (this.isInFavourites) {
          this.isLiked = false;
          this.$emit('remove', this.product);
        } else {
          this.isLiked = true;
          this.$emit('like', this.product);
        }
      },
    },
    computed: {
      isInFavourites() {
        if (this.product.hasOwnProperty('isInFavourites'))
          return this.product.isInFavourites;

        if (this.product.hasOwnProperty('product'))
          return this.product.product.isInFavourites;
      },
    },
    mounted() {
      this.isLiked = this.isInFavourites;
    },
  };
</script>

<style lang="scss" scoped>
  .pad {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    height: 100%;
  }

  .name {
    color: $darkPurple;
    margin-right: 12px;
    align-self: flex-start;
  }

  .like {
    align-self: flex-end;
  }

  .heart {
    width: 24px;
    height: 24px;
    fill: $gray;

    &:hover {
      fill: $red;
    }
  }

  .liked {
    fill: $red;
  }
</style>
