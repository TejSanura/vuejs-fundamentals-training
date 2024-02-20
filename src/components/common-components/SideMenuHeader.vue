<template>
  <div>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <router-link to="/form">Form</router-link>
    </div>
    <span style="font-size:20px;cursor:pointer" @click="openNav">&#9776;</span>
  </div>
</template>

<script setup>

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
}
</script>
