<template>
  <div class="pagination">
    <button class="pagination__btn" v-if="current > 1" @click="prevPage">
      <i class="arrow left"></i>
    </button>
    <button class="pagination__btn" v-for="page in total" :key="page.id" @click="action(page)" :disabled="page === current">{{page > 10 ? page : `0${page}`}}</button>
    <button class="pagination__btn" v-if="current < total" @click="nextPage">
      <i class="arrow right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationButtons",
  props: {
    total: Number,
    current: Number,
    action: Function,
  },
  methods: {
    nextPage() {
      this.action(this.current + 1);
    },
    prevPage() {
      this.action(this.current - 1);
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  &__btn {
    @include rounded(50%);
    @include btnColors(#fff, $primary1);
    display: block;
    width: 52px;
    height: 52px;
    border: 1px solid $primary1;
    cursor: pointer;
    &:disabled {
      @include btnColors($primary3, $primary3);
      border-color: transparent;
    }
  }
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
}
</style>