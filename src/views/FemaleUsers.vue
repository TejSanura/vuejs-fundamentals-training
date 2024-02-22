<template>
  <div>
    <!-- <div>
      <p v-if="showThisKeyword === 'fullname'">Full Name: Tej Sanura</p>
      <p v-else-if="showThisKeyword === 'company'">Company Name: Capgemini</p>
      <p v-else>Email: tej@gmail.com</p>
      <p v-show="showThisKeyword === 'fullname'">Full Name: Tej Sanura</p>
  
      <div v-html="htmlContent"></div>
    </div> -->

    <Alert>
      <template #slot1>
        <h4>This is H4 title</h4>
      </template>
      <template #slot2>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </template>
    </Alert>

    <UserCard
      v-for="(user, index) in computedUsers" :key="index"
      :firstName="user.firstName"
      :lastName="user.lastName"
      :gender="user.gender"
      :email="user.email"
      :imageUrl="user.image"
      :id="user.id"
    />
  </div>
</template>
  
<script setup>
import { ref, computed } from "vue";
import { USERS } from "@/const";

import Alert from "@/components/common-components/Alert.vue";
import UserCard from "@/components/common-components/UserCard.vue";

const users = ref(USERS);

const computedUsers = computed(() => {
  let arr = users.value.map((user) => {
    user.firstName = user.firstName.toUpperCase()
    user.lastName = user.lastName.toUpperCase()
    return user
  })
  arr = arr.filter(user => {
    if (user.gender === "female") {
      return user
    }
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
