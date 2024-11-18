<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Content from './components/Content.vue';
import './assets/main.css'
</script>

<template>
  <header>
      <Navbar/>
  </header>
  <main>
    <Content>
      <RouterView/>
    </Content>
  </main>
</template>

<style scoped>

</style>
