<template>
  <div>
    <label for="name">Name: <input id="name" v-model="name"></label>
    <label for="mail"><input id="mail" v-model="mail"></label>
    <button @click="saveData">Save</button>
    <p>Age {{ userData.age }}</p>
    <button @click="toggleInfo">Show more</button>
    <div v-if="showMore">
      <p>Phone {{ userData.phone }}</p>
      <p>Address {{ userData.address }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserDetail',
  props: ['userData'],
  methods: {
    toggleInfo() {
      this.showMore = !this.showMore;
    },
    saveData() {
      const updatedUser = {
        user: this.userData,
        name: this.name,
        mail: this.mail,
      }
      this.$emit('updateUser', updatedUser)
    }
  },
  data() {
    return {
      showMore: false,
      name: '',
      mail: '',
    }
  },
  created() {
    this.name = this.userData.name;
    this.mail = this.userData.mail;
  }
}
</script>
<style lang="scss">
  
</style>