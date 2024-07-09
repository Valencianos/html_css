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
        section: 'Decor / Artchitecture',
        id: 2,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img3,
        name: 'Modern Kitchan',
        section: 'Decor / Artchitecture',
        id: 3,
        tags: ['Bathroom', 'Kitchan']
      },
      {
        img: img4,
        name: 'Modern Kitchan',
        section: 'Decor / Artchitecture',
        id: 4,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img5,
        name: "Minimal Bedroom",
        section: "Decor / Artchitecture",
        id: 5,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img6,
        name: "Minimal Bedroom",
        section: "Decor / Artchitecture",
        id: 6,
        tags: ['Bed Room', 'Living Area']
      },
      {
        img: img7,
        name: "Classic Minimal Bedroom",
        section: "Decor / Artchitecture",
        id: 7,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img8,
        name: "Modern Bedroom",
        section: "Decor / Artchitecture",
        id: 8,
        tags: ['Bed Room', 'Living Area']
      },
      {
        img: img9,
        name: "Minimal Bedroom table",
        section: "Decor / Artchitecture",
        id: 9,
        tags: ['Bed Room', 'Bathroom']
      },
      {
        img: img10,
        name: "System Table",
        section: "Decor / Artchitecture",
        id: 10,
        tags: ['Bed Room', 'Bathroom']
      },
      {
        img: img11,
        name: "Modern Medroom",
        section: "Decor / Artchitecture",
        id: 11,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img12,
        name: "Modern Bedroom",
        section: "Decor / Artchitecture",
        id: 12,
        tags: ['Bed Room', 'Living Area']
      }
    ],
  },
  getters: {
    project(state){
      return state.projects;
    },
  },

  mutations: {

  }
})

export default store;