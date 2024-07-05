<template>
  <section class="articles">
    <div class="container">
      <div class="articles__box">
        <h2 class="articles__title">Articles &amp; News</h2>
        <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <div class="articles__content">
        <article v-for="article in articles" :key="article.id" class="articles__item item">
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
import img1 from '@/assets/img/kitchen-design.png'
import img2 from '@/assets/img/lifestyle-design.png'
import img3 from '@/assets/img/interior-design.png'
import img4 from '@/assets/img/kitchen-design_2.png'
import img5 from '@/assets/img/lifestyle-design_2.png'
import img6 from '@/assets/img/interior-design_2.png'

export default {
  name: "ArticleCom",
  data() {
    return {
      articles: [
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchan Design',
          date: '26 December,2022',
          img: img1
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          category: 'Living Design',
          date: '22 December,2022',
          img: img2
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December,2022',
          img: img3
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchan Design',
          date: '26 December,2022',
          img: img4
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          category: 'Living Design',
          date: '22 December,2022',
          img: img5
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December,2022',
          img: img6
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

  .articles {
    &__box {
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }
    &__title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 50px;
      line-height: 1.25;
      letter-spacing: 0.02em;
      color: #292f36;
    }
    &__text {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      color: #4d5053;
      margin-bottom: 52px;
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 27px;
      justify-content: space-between;
    }
    &__item {
      border: 1px solid #e7e7e7;
      border-radius: 62px;
      padding: 21px;
      box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
      &:hover {
        box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
        background: #f4f0ec;
        & button {
          background-color: #fff;
        }
      }
    }

  .item {
    position: relative;
    z-index: 1;
    &__img {
      margin-bottom: 21px;
    }
    &__design {
      position: absolute;
      left: 41px;
      top: 249px;
      z-index: 5;
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: #4d5053;
      background: #fff;
      border-radius: 8px 8px 8px 0;
      padding: 4px 10px;
    }
    &__text {
      margin-bottom: 16px;
      &_title {
        font-family: "DM Serif Display", sans-serif;
        font-weight: 400;
        font-size: 25px;
        line-height: 1.25;
        letter-spacing: 0.02em;
        color: #292f36;
        margin-bottom: 30px;
      }
      &_subtitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &_date {
        font-family: "Jost", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #4d5053;
      }
      &_link {
        width: 52px;
        height: 52px;
      }
    }
  }
  }
</style>