<template>
  <form>
    <div>
      <input
        ref="myUserNameRef"
        type="text"
        v-model="usersInfo.name"
        placeholder="Enter User Name"
      />
    </div>

    <div>
      <select name="country" id="country" v-model="usersInfo.country">
        <option value="India">India</option>
        <option value="US">US</option>
        <option value="Canada">Canada</option>
      </select>
    </div>

    <div>
      <label> Female
        <input type="radio" value="female" v-model="usersInfo.gender">
      </label>
      <label> Male
        <input type="radio" value="male" v-model="usersInfo.gender">
      </label>
    </div>

    <br />

    <div>
      <label class="container"> {{ usersInfo.isActive === true ? 'Active' : 'Inactive' }}
        <input type="checkbox" v-model="usersInfo.isActive">
        <span class="checkmark"></span>
      </label>
    </div>

    <br />

    <div>
      <button
        class="button button1"
        :class="isButtonDisabled ? 'disabled' : ''"
        @click.prevent="onFormSubmit"
      >
      Submit</button>
    </div>

    <br />
    Time Taken to fill the form: {{ timer }}
  </form>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
//States
const myUserNameRef = ref(null);
const isButtonDisabled = ref(true);
const timer = ref(0);
const myTime = ref(null);
const usersInfo = ref({
  name: "",
  country: "",
  isActive: false,
  gender: "female"
})

//Methods
const onFormSubmit = () => {
  console.log(usersInfo.value)
}

//Events
onMounted(() => {
  console.log(route.meta)
  myUserNameRef.value.focus();
  myTime.value = setInterval(() => {
    timer.value = timer.value + 1;
  }, 1000)
})

onBeforeUnmount(() => {
  myTime.value = null;
  console.log('myTime.value:', myTime.value);
})

//Watchers
watch(usersInfo.value, (newValue) => {
  if (newValue.name && newValue.country) {
    isButtonDisabled.value = false
  } else {
    isButtonDisabled.value = true
  }
})
</script>