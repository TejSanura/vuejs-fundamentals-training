<template>
  <main>
    <TheWelcome />
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
