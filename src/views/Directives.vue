<template>
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
  
  
  
  
  
  <style scoped>
  .pink-user-card {
    padding: 10px;
    border: 2px solid;
    width: 300px;
    border-radius: 10px;
    border-color: pink;
    margin-bottom: 10px;
  }
  
  .blue-user-card {
    padding: 10px;
    border: 2px solid;
    width: 300px;
    border-radius: 10px;
    border-color: blue;
    margin-bottom: 10px;
  }
  
  .d-flex {
    display: flex;
  }
  
  .justify-content-between {
    justify-content: space-between;
  }
  
  .myClass {
    margin-left: 10px;
  }
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
  
  nav a.router-link-exact-active {
    color: var(--color-text);
  }
  
  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
  
  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
  
  nav a:first-of-type {
    border: 0;
  }
  
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  
    .logo {
      margin: 0 2rem 0 0;
    }
  
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
  
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
  </style>
  