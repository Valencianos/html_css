<template>
  <TitleImage 
    :bannerImgUrl=banner.bannerImgUrl
    :bannerTitle='banner.bannerTitle'
    :bannerSubtitle='banner.bannerSubtitle'
  ></TitleImage>
  <div class="container">
    <CategoryToggle></CategoryToggle>
    <div class="about__content">
      <ProjectCard v-for="project in projects" :key="project.id" :project=project></ProjectCard>
    </div>
  </div>
</template>
<script>
import TitleImage from '../components/ui/TitleImage.vue';
import CategoryToggle from '../components/ui/CategoryToggle.vue';
import ProjectImg from '../assets/img/projectTitleImage.png';
import ProjectCard from '../components/ui/ProjectCard.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TitleImage,
    CategoryToggle,
    ProjectCard,
  },
  data() {
    return {
      banner: {
        bannerImgUrl: ProjectImg,
        bannerTitle: 'Our Project',
        bannerSubtitle: 'Home / Project'
      },
    }
  },
  computed: {
    ...mapGetters(['projects'])
  },
}
</script>
<style lang="scss">
  .about__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 35px;
  }
</style>