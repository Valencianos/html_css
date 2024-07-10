import {createStore} from 'vuex'
import pr1 from '../assets/img/project_1.png'
import pr2 from '../assets/img/project_2.png'
import pr3 from '../assets/img/project_3.png'
import pr4 from '../assets/img/project_4.png'
import pr5 from '../assets/img/Minimal_Bedroom_1.png'
import pr6 from '../assets/img/Minimal_Bedroom_2.png'
import pr7 from '../assets/img/Classic_Minimal_Bedroom_1.png'
import pr8 from '../assets/img/Modern_Bedroom.png'
import pr9 from '../assets/img/Minimal_Bedroom_Table.png'
import pr10 from '../assets/img/System_Table.png'
import pr11 from '../assets/img/Modern_Medroom.png'
import pr12 from '../assets/img/Modern_Bedroom_2.png'
import ar1 from '../assets/img/kitchen-design.png'
import ar2 from '../assets/img/lifestyle-design.png'
import ar3 from '../assets/img/interior-design.png'
import ar4 from '../assets/img/kitchen-design_2.png'
import ar5 from '../assets/img/lifestyle-design_2.png'
import ar6 from '../assets/img/interior-design_2.png'

const store = createStore({
  state: {
    projects: [
      {
        id: 1,
        img: pr1,
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        tags: ['Living Area', 'Kitchan'],
      },
      {
        img: pr2,
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        id: 2,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: pr3,
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        id: 3,
        tags: ['Bathroom', 'Kitchan']
      },
      {
        img: pr4,
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        id: 4,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: pr5,
        title: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        id: 5,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: pr6,
        title: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        id: 6,
        tags: ['Bed Room', 'Living Area']
      },
      {
        img: pr7,
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        id: 7,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: pr8,
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        id: 8,
        tags: ['Bed Room', 'Living Area']
      },
      {
        img: pr9,
        title: "Minimal Bedroom table",
        category: "Decor / Artchitecture",
        id: 9,
        tags: ['Bed Room', 'Bathroom']
      },
      {
        img: pr10,
        title: "System Table",
        category: "Decor / Artchitecture",
        id: 10,
        tags: ['Bed Room', 'Bathroom']
      },
      {
        img: pr11,
        title: "Modern Medroom",
        category: "Decor / Artchitecture",
        id: 11,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: pr12,
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        id: 12,
        tags: ['Bed Room', 'Living Area']
      }
    ],
    articles: [
      {
        id: 1,
        title: 'Let’s Get Solution For Building Construction Work',
        category: 'Kitchan Design',
        img: ar1,
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        date: '26 December,2022',
        details: {
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
        id: 2,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        category: 'Living Design',
        date: '22 December,2022',
        img: ar2,
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        details: {
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
        id: 3,
        title: 'Best For Any Office & Business Interior Solution',
        category: 'Interior Design',
        date: '25 December,2022',
        img: ar3,
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        details: {
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
        id: 4,
        title: 'Let’s Get Solution For Building Construction Work',
        category: 'Kitchan Design',
        date: '26 December,2022',
        img: ar4,
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        details: {
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
        id: 5,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        category: 'Living Design',
        date: '22 December,2022',
        img: ar5,
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        details: {
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
        id: 6,
        title: 'Best For Any Office & Business Interior Solution',
        category: 'Interior Design',
        date: '25 December,2022',
        img: ar6,
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        quote: `The details are not the details. 
        They make the design.`,
        details: {
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
  },
  getters: {
    articles(state){
      return state.articles;
    },
    projects(state){
      return state.projects;
    }
  }
})

export default store;