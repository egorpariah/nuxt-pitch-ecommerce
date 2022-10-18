<template>
  <div class="container">
    <h2 class="title">Каталог</h2>
    <ProductsList
      @like="addToFavourites"
      @remove="deleteFromFavourites"
      :products="$store.state.catalog.products"
    />
    <DynamicPagination
      class="pagination"
      :totalPages="$store.state.catalog.totalPages"
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
      let count = await $axios.$get('/commerce/products', {
        params: {
          'filters[aggregate]': 'count',
        },
        headers: { account: '8b59a775077536f3b73bb774655b94f6' },
      });
      count = count.data.products.count;
      const offset =
        store.state.catalog.page === 1
          ? 0
          : (store.state.catalog.page - 1) * store.state.catalog.limit;
      const response = await $axios.$get('/commerce/products', {
        params: {
          'filters[limit]': store.state.catalog.limit,
          'filters[offset]': offset,
        },
        headers: { account: '8b59a775077536f3b73bb774655b94f6' },
      });
      store.commit('catalog/setProducts', response.data.products);
      store.commit(
        'catalog/setTotalPages',
        Math.ceil(count / store.state.catalog.limit)
      );
    },
    methods: {
      async addToFavourites(product) {
        try {
          await this.$axios.$post(
            '/commerce/products/favourites',
            {
              product: product.id,
            },
            {
              headers: {
                account: '8b59a775077536f3b73bb774655b94f6',
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      },
      async deleteFromFavourites(product) {
        try {
          await this.$axios.$delete(
            `/commerce/products/${product.id}/favourites`,
            {
              headers: {
                account: '8b59a775077536f3b73bb774655b94f6',
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      },
    },
    computed: {
      ...mapGetters({
        page: 'catalog/getPage',
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
