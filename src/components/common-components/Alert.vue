<template>
  <div class="alert">
    <h3>Success!</h3>
    <slot name="slot1"></slot>
    <p>Green often indicates something successful or positive.</p>

    <slot name="slot2"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.alert {
  padding: 20px;
  color: #000;
  background-color: #ddffdd ;
  border: 1px solid #ccc;
  margin-bottom: 15px;
}
</style>
