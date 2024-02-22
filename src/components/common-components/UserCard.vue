<template>
  <div
    :class="[
      gender === 'male' ? 'blue-user-card' : 'pink-user-card',
      'justify-content-between',
      'd-flex'
    ]"
    :style="{borderRadius: '10px'}"
  >
    <div>
      <p>Fullname: {{ firstName }} {{ lastName }}</p>
      <p>gender: {{ gender }}</p>
      <p>email: {{ email }}</p>
    </div>
    <span @click="onUserCardClick">
      <img :src="imageUrl" :alt="firstName" width="70px" height="60px">
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  imageUrl: String,
  id: String
})

const onUserCardClick = () => {
  router.push({
    path: `/user-detail/${props.id}`,
    query: {
      readOnly: true
    }
  })
}
</script>