export const state = () => ({
  products: [],
  totalPages: 0,
  page: 1,
  limit: 50,
});

export const getters = {
  getPage(state) {
    return state.page;
  },
};

export const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  setProducts(state, products) {
    state.products = products;
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages;
  },
};
