<script setup>
import Home from "./views/Home.vue"
import HeaderApp from "./views/HeaderApp.vue"

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>

    <header>
      <HeaderApp></HeaderApp>
    </header>
    <Home></Home>
    <RouterView />
  </v-app>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 53%, rgba(255,169,0,0.5648634453781513) 100%);
  z-index: 1000;
}
</style>
