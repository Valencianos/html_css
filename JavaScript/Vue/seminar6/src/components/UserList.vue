<template>
  <div>
    <UserDetail v-for="user in incomeData" :key="user.mail" :user-data="user" @updateUser="updateUser"></UserDetail>
  </div>
</template>
<script>
import UserDetail from './UserShow.vue'

export default {
  name: 'UserList',
  data() {
    return {
      userData: '',
      incomeData: [{
        mail: 'user1@example.com',
        name: 'John Doe',
        age: 30,
        phone: 123,
        address: '123 Main St',
      },
      {
        mail: 'user2@example.com',
        name: 'Jane Doe',
        age: 28,
        phone: 456,
        address: '456 Elm St',
      },
      {
        mail: 'user3@example.com',
        name: 'Mike Doe',
        age: 35,
        phone: 789,
        address: '789 Oak St',
      },
      {
        mail: 'user4@example.com',
        name: 'Sarah Doe',
        age: 27,
        phone: 101,
        address: '101 Maple St',
      },
      {
        mail: 'user5@example.com',
        name: 'Tom Doe',
        age: 32,
        phone: 112,
        address: '112 Willow St',
      }]
    }
  },
  components: {
    UserDetail,
  },
  methods: {
    updateUser(userData) {
    const findUser = this.incomeData.find(user => user === userData.user);
    if (findUser) {
      findUser.name = userData.name;
      findUser.mail = userData.mail;
    }
  }
}
}
</script>
<style lang="scss">
  
</style>

<!-- Создайте компонент "Список пользователей" (UserList), который будет отображать список пользователей из переданного массива. 
Каждый пользователь должен быть представлен в виде отдельного компонента "Пользователь" (User), принимающего пропсы с данными 
о пользователе (например, имя, фамилия и электронная почта). -->

