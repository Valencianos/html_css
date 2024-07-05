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
        img: img1,
        title: 'Modern Kitchan',
        text: 'Decor / Artchitecture',
        id: 1,
        tags: ['Living Area', 'Kitchan']
      },
      {
        img: img2,
        title: 'Modern Kitchan',
        text: 'Decor / Artchitecture',
        id: 2,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img3,
        title: 'Modern Kitchan',
        text: 'Decor / Artchitecture',
        id: 3,
        tags: ['Bathroom', 'Kitchan']
      },
      {
        img: img4,
        title: 'Modern Kitchan',
        text: 'Decor / Artchitecture',
        id: 4,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img5,
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
        id: 5,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img6,
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
        id: 6,
        tags: ['Bed Room', 'Living Area']
      },
      {
        img: img7,
        title: "Classic Minimal Bedroom",
        text: "Decor / Artchitecture",
        id: 7,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img8,
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
        id: 8,
        tags: ['Bed Room', 'Living Area']
      },
      {
        img: img9,
        title: "Minimal Bedroom table",
        text: "Decor / Artchitecture",
        id: 9,
        tags: ['Bed Room', 'Bathroom']
      },
      {
        img: img10,
        title: "System Table",
        text: "Decor / Artchitecture",
        id: 10,
        tags: ['Bed Room', 'Bathroom']
      },
      {
        img: img11,
        title: "Modern Medroom",
        text: "Decor / Artchitecture",
        id: 11,
        tags: ['Bed Room', 'Kitchan']
      },
      {
        img: img12,
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
        id: 12,
        tags: ['Bed Room', 'Living Area']
      }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
