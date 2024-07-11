<template>
  <div class="card">
    <img class="card__img" :src="project.img" :alt="project.category">
    <div class="card__content">
      <div class="card__text">
        <h3 class="card__title">{{ project.name }}</h3>
        <p class="card__subtitle">{{ project.category }}</p>
      </div>
      <button class="card__button">
        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: Object
  }
}
</script>
<style lang="scss" scoped>
  .card {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    &__title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 1.25;
      letter-spacing: 0.02em;
      color: #292f36;
      margin: 0;
    }
    &__subtitle {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      color: #4d5053;
      margin: 0;
    }
    &__button {
      color: #f4f0ec;
      border-radius: 100%;
      border-color: transparent;
      width: 70px;
      height: 70px;
      outline: none;
    }
  }
</style>