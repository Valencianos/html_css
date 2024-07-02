<template lang="">
  <section class="about">
    <div class="container">
      <h2 class="about__title">Следите за нашими проектами</h2>
      <p class="about__text">Хорошо известно, что читатель будет отвлекаться<br>на читабельный контент страницы </p>
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
import image1 from "../assets/img/project_1.png"
import image2 from "../assets/img/project_2.png"
import image3 from "../assets/img/project_3.png"
import image4 from "../assets/img/project_4.png"
export default {
  name: "AboutComponent",
  data() {
    return {
      abouts: [
        {
          title: "Современная кухня",
          subtitle: "Декор / Планировка",
          img: image1
        },
        {
          title: "Современная кухня",
          subtitle: "Декор / Планировка",
          img: image2
        },
        {
          title: "Современная кухня",
          subtitle: "Декор / Планировка",
          img: image3
        },
        {
          title: "Современная кухня",
          subtitle: "Декор / Планировка",
          img: image4
        }
      ]
    }
  },
}
</script>
<style lang="">
  
</style>