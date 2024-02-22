<template>
  <div>
    <form>
      <p>Full Name: {{ userdetail.firstName }} {{ userdetail.lastName }}</p>
      <p>Email: {{ userdetail.email }}</p>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { USERS } from '@/const';

const currentRoute = useRoute()

const userdetail = ref({})

onMounted(() => {
  const id = currentRoute.params.id
  const user = USERS.find(user => user.id.toString() === id)
  userdetail.value = user

  //query param
  console.log(currentRoute.query)
})
</script>
