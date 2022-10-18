<template>
  <div class="container">
    <h2 class="title">Избранное</h2>
    <ProductsList
      :products="$store.state.favourites.products"
      @remove="deleteFromFavourites"
    />
    <DynamicPagination
      class="pagination"
      :totalPages="$store.state.favourites.totalPages"
      :currentPage="page"
      @set="$store.commit('catalog/setPage', $event)"
    />
  </div>
</template>

<script>
  import ProductsList from '~/components/ProductsList.vue';
  import DynamicPagination from '../../components/UI/DynamicPagination.vue';
  import { mapGetters } from 'vuex';

  export default {
    components: { ProductsList, DynamicPagination },
    async asyncData({ $axios, store }) {
      let count = await $axios.$get('/commerce/products/favourites', {
        params: {
          'filters[aggregate]': 'count',
        },
        headers: { account: '8b59a775077536f3b73bb774655b94f6' },
      });
      count = count.data.productsFavourites.count;
      const offset =
        store.state.favourites.page === 1
          ? 0
          : (store.state.favourites.page - 1) * store.state.favourites.limit;
      const response = await $axios.$get('/commerce/products/favourites', {
        params: {
          'filters[limit]': store.state.favourites.limit,
          'filters[offset]': offset,
        },
        headers: { account: '8b59a775077536f3b73bb774655b94f6' },
      });
      console.log(response);
      store.commit('favourites/setProducts', response.data.productsFavourites);
      store.commit(
        'favourites/setTotalPages',
        Math.ceil(count / store.state.favourites.limit)
      );
    },
    methods: {
      async deleteFromFavourites(product) {
        try {
          await this.$axios.$delete(
            `/commerce/products/${product.product.id}/favourites`,
            {
              headers: {
                account: '8b59a775077536f3b73bb774655b94f6',
              },
            }
          );

          this.$store.commit(
            'favourites/setProducts',
            this.$store.state.favourites.products.filter(
              p => p.product.id !== product.product.id
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    },
    computed: {
      ...mapGetters({
        page: 'favourites/getPage',
      }),
    },
    watch: {
      page() {
        this.$nuxt.refresh();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .title {
    font-size: 24px;
    color: $darkPurple;
    font-weight: bold;
    margin-bottom: 24px;
  }
</style>
