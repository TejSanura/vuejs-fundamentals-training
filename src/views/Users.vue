<template>
  <div>
    <!-- <div>
      <p v-if="showThisKeyword === 'fullname'">Full Name: Tej Sanura</p>
      <p v-else-if="showThisKeyword === 'company'">Company Name: Capgemini</p>
      <p v-else>Email: tej@gmail.com</p>
      <p v-show="showThisKeyword === 'fullname'">Full Name: Tej Sanura</p>
  
      <div v-html="htmlContent"></div>
    </div> -->
    <div v-for="(user, index) in computedUsers" :key="index">
      <div
        :class="[
          user.gender === 'male' ? 'blue-user-card' : 'pink-user-card',
          'justify-content-between',
          'd-flex'
        ]"
        :style="{borderRadius: '10px'}"
      >
        <div>
          <p>Fullname: {{ user.firstName }} {{ user.lastName }}</p>
          <p>gender: {{ user.gender }}</p>
          <p>email: {{ user.email }}</p>
        </div>
        <img :src="user.image" :alt="user.firstName" width="70px" height="60px">
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { USERS } from "@/const";
  
  const users = ref(USERS);
  
  const computedUsers = computed(() => {
    const arr = users.value.map((user) => {
      user.firstName = user.firstName.toUpperCase()
      user.lastName = user.lastName.toUpperCase()
      return user
    })
    return arr;
  })
  
  const showThisKeyword = ref("company");
  
  const htmlContent = ref(`
    <div>
        <p>Aurhour: Tej Sanura</p>
        <p>Tile: Vue JS Training</p>
      </div>
  `);
  
  const renderSomething = () => {
    return "Tej Sanura";
  }
</script>
