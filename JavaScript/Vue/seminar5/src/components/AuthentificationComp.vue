<template lang="">
  <div>
    <form v-if="!isAuthenticated">
      <input type="text" placeholder="login" class="form__login" v-model="userLogin">Login
      <input type="text" placeholder="password" class="form__pw" v-model="userPwd">Password
      <button @click="formCheck">Submit</button>
    </form>
    <p v-else>You are successfully log in</p>
  </div>
</template>
<script>
export default {
  name: "AuthentificationComp",
  data() {
    return {
      isAuthenticated: false,
      userLogin: "",
      userPwd: "",
    }
  },
  methods: {
    formCheck() {
      if (this.userLogin && this.userPwd) {
        this.isAuthenticated = true
      }
    }
  },
}
</script>
<style lang="scss">
  
</style>

<!-- Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа или сообщение об успешной  аутентификации в зависимости от переданного пропса isAuthenticated. Используйте директиву v-if для условного отображения разных элементов в шаблоне компонента. -->