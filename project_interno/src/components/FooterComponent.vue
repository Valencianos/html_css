<template lang="">
  <footer class="footer">
    <div class="container">
      <div class="footer__box">
        <div class="footer__media">
          <LogoComponent></LogoComponent>
          <a href="#" class="footer__media_link">
            <img src="../assets/img/twitter.svg" alt="Twitter">
          </a>
          <a href="#" class="footer__media_link">
            <img src="../assets/img/linkedin.svg" alt="LinkedIn">
          </a>
        </div>

        <div class="footer__links">
          <h4 class="footer__links_title">Страницы</h4>
          <p class="footer__links_text">Домой</p>
          <p class="footer__links_text">Проект</p>
          <p class="footer__links_text">Блог</p>
        </div>

        <div class="footer__contacts">
          <h4 class="footer__contacts_title">Контакты</h4>
          <p class="footer__contacts_info">55 East Birchwood Ave.<br> Brooklyn, New York 11201</p>
          <p class="footer__contacts_info">contact@interno.com</p>
          <p class="footer__contacts_info">(123) 456 - 7890</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import LogoComponent from './LogoComponent.vue';

export default {
  name: "FooterComponent",
  components: {
    LogoComponent,
  }
}
</script>
<style lang="">
  
</style>