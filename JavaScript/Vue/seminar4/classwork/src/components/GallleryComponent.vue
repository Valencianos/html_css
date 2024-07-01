<template>
  <div>
    <div>
      <img :src="currentImgUrl" alt="" class="big">
    </div>
    <div>
      <img v-for="(img, i) in images" :key="i" :src="img.url" class="mini" @click="selectPic(i)">
    </div>
  </div>
</template>
<script lang="js">

export default {
  name: 'GalleryComponent',
  data () {
    return {
      currentImg: 0,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1718113360777-8aadd1985ecd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D',
          alt: 'Image 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1718494119448-16dad33afbed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D',
          alt: 'Image 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1569878698992-c6e8c84bdd4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D',
          alt: 'Image 3'
        }
      ]
    }
  },
  computed: {
    currentImgUrl () {
      return this.images[this.currentImg].url
    }
  },
  methods: {
    selectPic (i) {
      this.currentImg = i
    }
  }
}
</script>
<style lang="scss">
.mini {
  width: 100px;
}
.big {
  width: 300px;
}
</style>
