<template>
  <ul class="pagination">
    <li class="page">
      <button
        class="button"
        :class="{ disabled: isInFirstPage }"
        :disabled="isInFirstPage"
        @click="$emit('set', 1)"
      >
        «
      </button>
    </li>
    <li class="page">
      <button
        class="button"
        :class="{ disabled: isInFirstPage }"
        :disabled="isInFirstPage"
        @click="$emit('set', currentPage - 1)"
      >
        &lt;
      </button>
    </li>
    <li
      v-for="page in pages"
      :key="page.name"
      class="page"
      @click="$emit('set', page.name)"
    >
      <button
        :class="{
          current: page.name === currentPage,
        }"
        class="button"
        :disabled="page.isDisabled"
      >
        {{ page.name }}
      </button>
    </li>
    <li class="page">
      <button
        class="button"
        :class="{ disabled: isInLastPage }"
        :disabled="isInLastPage"
        @click="$emit('set', currentPage - 1)"
      >
        &gt;
      </button>
    </li>
    <li class="page">
      <button
        class="button"
        :class="{ disabled: isInLastPage }"
        :disabled="isInLastPage"
        @click="$emit('set', totalPages)"
      >
        »
      </button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'DynamicPagination',
    props: {
      currentPage: {
        type: Number,
      },
      totalPages: {
        type: Number,
      },
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3,
      },
    },
    computed: {
      startPage() {
        if (this.currentPage === 1) return 1;

        if (this.currentPage === this.totalPages) {
          return this.totalPages - this.maxVisibleButtons + 1;
        }

        return this.currentPage - 1;
      },
      pages() {
        const range = [];

        for (
          let i = this.startPage;
          i <=
          Math.min(
            this.startPage + this.maxVisibleButtons - 1,
            this.totalPages
          );
          i++
        ) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          });
        }

        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .page {
    cursor: pointer;
    margin-right: 5px;
  }

  .button {
    display: flex;
    justify-content: center;
    color: $darkPurple;
    align-items: center;
    background: #ffffff;
    min-width: 40px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid transparent;

    &:hover {
      border-color: $darkPurple;
      border: 1px solid;
    }

    &:disabled {
      border: none;
      cursor: default;
    }
  }

  .disabled {
    color: $gray;
  }
  .current {
    border: none;
    font-weight: bold;
    background: $darkPurple;
    color: #ffffff;
  }
</style>
