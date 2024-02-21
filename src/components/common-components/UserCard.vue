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
    <img :src="imageUrl" :alt="firstName" width="70px" height="60px">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  imageUrl: String
})
</script>