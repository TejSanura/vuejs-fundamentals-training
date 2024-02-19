<template>
    <div>
      <div v-for="(item) in computedList" :key="item.id">
        <div class="d-flex justify-content-between"
          :class="item.gender === 'female' ? 'pink-user-card' : 'blue-user-card' "
        >
          <div>
            <p>Name: {{ item.firstName }} {{ item.lastName }}</p>
            <p>Age: {{ item.age }}</p>
            <p>Email Id: {{ item.email }}</p>
          </div>
          <div>
            <img :src="item.image" :alt="item.firstName" width="60px" height="70px">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  
  import {USERS} from "@/const";
  
  const userList = ref([]);
  
  const computedList = computed(() => {
    return userList.value.map((user) => {
      user.firstName = user.firstName.toUpperCase()
      user.lastName = user.lastName.toUpperCase()
      return user
    });
  })
  
  onMounted(() => {
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
      userList.value = res.users;
      console.log(userList.value)
    });
  })
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
  