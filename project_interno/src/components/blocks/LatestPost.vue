<template>
  <section class="post">
    <div class="container">
      <h3 class="post__title">Latest Post</h3>
      <div class="post__box">
        <img class="post__img" :src="postImg" alt="">
        <div class="post__textbox">
          <h4 class="post__textbox_title">{{ postTitle }}</h4>
          <p class="post__textbox_text">{{ postText }}</p>
          <div class="post__textbox_link">
            <p class="post__textbox_date">{{ postDate }}</p>
            <a href="#" class="post__link">
              <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
              <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    postImg: {
      type: String,
      required: true,
    },
    postTitle: {
      type: String,
      required: true,
    },
    postText: {
      type: String,
      required: true,
    },
    postDate: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss">
  .post {
    margin-bottom: 150px;
    &__title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 50px;
      line-height: 1.25;
      letter-spacing: 0.02em;
      color: #292f36;
      margin-bottom: 27px;
    }
    &__box {
      box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
      border: 1px solid #e7e7e7;
      border-radius: 62px;
      padding: 22px;
      display: flex;
      gap: 30px;
    }
    &__textbox {
        padding: 51px 34px;
      &_title {
        font-family: "DM Serif Display", sans-serif;
        font-weight: 400;
        font-size: 25px;
        line-height: 1.25;
        letter-spacing: 0.02em;
        color: #292f36;
        margin-bottom: 22px;
      }
      &_text {
        font-family: "Jost", sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: #4d5053;
        margin-bottom: 41px;
      }
      &_link {
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
    }
  }

</style>