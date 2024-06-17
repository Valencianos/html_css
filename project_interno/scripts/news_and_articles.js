const app = Vue.createApp({
  data() {
    return {
      articles: [
        {
          title: 'Создадим лучший макет перепланировки',
          category: 'Дизайн кухни',
          date: '26 Декабрь,2022',
          img: './img/kitchen-design.png'
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          category: 'Дизайн для жизни',
          date: '22 Декабрь,2022',
          img: './img/lifestyle-design.png'
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          category: 'Дизайн Интерьера',
          date: '25 Декабрь,2022',
          img: './img/interior-design.png'
        },
        {
          title: 'Создадим лучший макет перепланировки',
          category: 'Дизайн кухни',
          date: '26 Декабрь,2022',
          img: './img/kitchen-design_2.png'
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          category: 'Дизайн для жизни',
          date: '22 Декабрь,2022',
          img: './img/lifestyle-design_2.png'
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          category: 'Дизайн Интерьера',
          date: '25 Декабрь,2022',
          img: './img/interior-design_2.png'
        }
      ]
    }
  }
})

app.mount('#article__box')



