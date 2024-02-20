<template>
  <main>
    <!-- <TheWelcome /> -->
    <h2>Home Page</h2>
  </main>
</template>

<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
  name: "Welcome",

  components: {
    TheWelcome
  },

  computed: {
    myComputedProperty() {
      return "MESSAGE!!!!!"
    }
  }
}
</script>
