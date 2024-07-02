<template lang="">
  <section class="about">
    <div class="container">
      <div class="about__box">
        <h2 class="about__title">Follow Our Projects</h2>
        <p class="about__text">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      </div>
      <div class="about__content">
        <div class="about__card" v-for="about in abouts" :key="about.id">
          <img class="card__img" :src="about.img" alt="Modern Kitchen">
          <div class="card__content">
            <div class="card__text">
              <h3 class="card__title">{{ about.title }}</h3>
              <p class="card__subtitle">{{ about.subtitle }}</p>
            </div>
            <button class="card__button">
              <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import image1 from "@/assets/img/project_1.png"
import image2 from "@/assets/img/project_2.png"
import image3 from "@/assets/img/project_3.png"
import image4 from "@/assets/img/project_4.png"

export default {
  name: "AboutCom",
  data() {
    return {
      abouts: [
        {
          title: "Modern Kitchan",
          subtitle: "Decor / Artchitecture",
          img: image1
        },
        {
          title: "Modern Kitchan",
          subtitle: "Decor / Artchitecture",
          img: image2
        },
        {
          title: "Modern Kitchan",
          subtitle: "Decor / Artchitecture",
          img: image3
        },
        {
          title: "Modern Kitchan",
          subtitle: "Decor / Artchitecture",
          img: image4
        }
      ]
    }
  },
}
</script>
<style lang="scss">
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about {
    &__box {
      margin-bottom: 93px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-weight: 400;
      align-items: center;
      margin-left: calc(50% - 370px);
      margin-right: calc(50% - 370px);
    }
    &__title {
      font-family: "DM Serif Display", sans-serif;
      font-size: 50px;
      line-height: 1.25;
      letter-spacing: 0.02em;
      color: #292f36;
    }
    &__text {
      font-family: "Jost", sans-serif;
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      color: #4d5053;
      text-align: center;
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 104px;
      grid-row-gap: 56px;
      margin-bottom: 96px;
    }
    &__card {
      display: flex;
      flex-direction: column;
    }
  }

  .card {
    &__img {
      margin-bottom: 24px;
    }
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