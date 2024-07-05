<template>
  <TitleImage 
    :bannerImgUrl=banner.bannerImgUrl
    :bannerTitle='banner.bannerTitle'
    :bannerSubtitle='banner.bannerSubtitle'
  ></TitleImage>
  <LatestPost
    :postTitle="post.title"
    :postImg="post.img"
    :postDate="post.date"
    :postText="post.text"
  ></LatestPost>
  <ArticleCom></ArticleCom>
</template>
<script>
import TitleImage from '../components/ui/TitleImage.vue';
import backImg from '../assets/img/articles_news_hero.png'
import postImg from '../assets/img/LatestPost.png'
import ArticleCom from '../components/blocks/ArticleCom.vue';
import LatestPost from '../components/blocks/LatestPost.vue';

export default {
  name: 'BlogView',
  components: {
    TitleImage,
    ArticleCom,
    LatestPost,
  },
  data() {
    return {
      banner: {
        bannerImgUrl: backImg,
        bannerTitle: 'Articles & News',
        bannerSubtitle: 'Home / Blog'
      },
      post: {
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: postImg,
        date: '26 December,2022',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      }
    }
  },
}
</script>
<style lang="scss" scoped>

</style>