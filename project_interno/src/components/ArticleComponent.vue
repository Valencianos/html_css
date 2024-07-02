<template lang="">
  <section class="articles">
    <div class="container">
      <div class="articles__box">
        <h2 class="articles__title">Статьи &amp;<br>Новости</h2>
        <p class="articles__text">Хорошо известно, что читатель будет отвлекаться<br>на читабельный контент страницы
        </p>
      </div>
      <div class="articles__content">
        <article v-for="article in articles.slice(0, 3)" :key="article.id" class="articles__item item">
          <img :src="article.img" alt="Kitchen Design" class="item__img">
          <p class="item__design">{{ article.category }}</p>
          <div class="item__text">
            <h3 class="item__text_title">{{ article.title }}</h3>
            <div class="item__text_subtitle">
              <p class="item__text_date">{{ article.date }}</p>
              <button href="#" class="item__text_link card__button">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.77142 14.9527L7.71428 8.267L1.77142 1.58128" stroke="#292F36" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import img1 from '../assets/img/kitchen-design.png'
import img2 from '../assets/img/lifestyle-design.png'
import img3 from '../assets/img/interior-design.png'
import img4 from '../assets/img/kitchen-design_2.png'
import img5 from '../assets/img/lifestyle-design_2.png'
import img6 from '../assets/img/interior-design_2.png'

export default {
  name: "ArticleComponent",
  data() {
    return {
      articles: [
        {
          title: 'Создадим лучший макет перепланировки',
          category: 'Дизайн кухни',
          date: '26 Декабрь,2022',
          img: img1
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          category: 'Дизайн для жизни',
          date: '22 Декабрь,2022',
          img: img2
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          category: 'Дизайн Интерьера',
          date: '25 Декабрь,2022',
          img: img3
        },
        {
          title: 'Создадим лучший макет перепланировки',
          category: 'Дизайн кухни',
          date: '26 Декабрь,2022',
          img: img4
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          category: 'Дизайн для жизни',
          date: '22 Декабрь,2022',
          img: img5
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          category: 'Дизайн Интерьера',
          date: '25 Декабрь,2022',
          img: img6
        }
      ]
    }
  },
}
</script>
<style lang="">
  
</style>