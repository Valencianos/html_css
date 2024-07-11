import {createStore} from 'vuex'
import img1 from '../assets/img/project_1.png'
import img2 from '../assets/img/project_2.png'
import img3 from '../assets/img/project_3.png'
import img4 from '../assets/img/project_4.png'
import img5 from '../assets/img/Minimal_Bedroom_1.png'
import img6 from '../assets/img/Minimal_Bedroom_2.png'
import img7 from '../assets/img/Classic_Minimal_Bedroom_1.png'
import img8 from '../assets/img/Modern_Bedroom.png'
import img9 from '../assets/img/Minimal_Bedroom_Table.png'
import img10 from '../assets/img/System_Table.png'
import img11 from '../assets/img/Modern_Medroom.png'
import img12 from '../assets/img/Modern_Bedroom_2.png'
import art1 from '../assets/img/kitchen-design.png'
import art2 from '../assets/img/lifestyle-design.png'
import art3 from '../assets/img/interior-design.png'
import art4 from '../assets/img/kitchen-design_2.png'
import art5 from '../assets/img/lifestyle-design_2.png'
import art6 from '../assets/img/interior-design_2.png'

const store = createStore({
  state: {
    projects: [
      {
        id: 1,
        img: img1,
        name: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        title: 'Let’s Get Solution For Building Construction Work',
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        date: '26 December,2022',
        tags: ['Living Area', 'Kitchan'],
        article: {
            title: 'Design sprints are great',
            content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
            bullet: [
              'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
              'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            ]
          }
      },
      {
        img: img2,
        name: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        id: 2,
        date: '26 December,2022',
        tags: ['Bed Room', 'Kitchan'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img3,
        name: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        id: 3,
        date: '26 December,2022',
        tags: ['Bathroom', 'Kitchan'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img4,
        name: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        id: 4,
        date: '26 December,2022',
        tags: ['Bed Room', 'Kitchan'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img5,
        name: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        id: 5,
        date: '26 December,2022',
        tags: ['Bed Room', 'Kitchan'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img6,
        name: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        id: 6,
        date: '26 December,2022',
        tags: ['Bed Room', 'Living Area'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img7,
        name: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        id: 7,
        date: '26 December,2022',
        tags: ['Bed Room', 'Kitchan'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img8,
        name: "Modern Bedroom",
        category: "Decor / Artchitecture",
        id: 8,
        date: '26 December,2022',
        tags: ['Bed Room', 'Living Area'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img9,
        name: "Minimal Bedroom table",
        category: "Decor / Artchitecture",
        id: 9,
        date: '26 December,2022',
        tags: ['Bed Room', 'Bathroom'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img10,
        name: "System Table",
        category: "Decor / Artchitecture",
        id: 10,
        date: '26 December,2022',
        tags: ['Bed Room', 'Bathroom'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img11,
        name: "Modern Medroom",
        category: "Decor / Artchitecture",
        id: 11,
        date: '26 December,2022',
        tags: ['Bed Room', 'Kitchan'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      },
      {
        img: img12,
        name: "Modern Bedroom",
        category: "Decor / Artchitecture",
        id: 12,
        date: '26 December,2022',
        tags: ['Bed Room', 'Living Area'],
        article: {
          title: 'Design sprints are great',
          content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
          bullet: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          ]
        }
      }
    ],
    articles: [
      {
        id: 1,
        title: 'Let’s Get Solution For Building Construction Work',
        category: 'Kitchan Design',
        date: '26 December,2022',
        img: art1
      },
      {
        id: 2,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        category: 'Living Design',
        date: '22 December,2022',
        img: art2
      },
      {
        id: 3,
        title: 'Best For Any Office & Business Interior Solution',
        category: 'Interior Design',
        date: '25 December,2022',
        img: art3
      },
      {
        id: 4,
        title: 'Let’s Get Solution For Building Construction Work',
        category: 'Kitchan Design',
        date: '26 December,2022',
        img: art4
      },
      {
        id: 5,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        category: 'Living Design',
        date: '22 December,2022',
        img: art5
      },
      {
        id: 6,
        title: 'Best For Any Office & Business Interior Solution',
        category: 'Interior Design',
        date: '25 December,2022',
        img: art6
      }
    ]
  },
  getters: {
    articles(state){
      return state.articles;
    },
    projects(state){
      return state.projects;
    },
  },

  mutations: {

  }
})

export default store;