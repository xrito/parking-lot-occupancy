<script setup>
import Sidebar from '../components/Sidebar.vue'

defineProps({
  name: String
});
</script>

<template>
  <Sidebar></Sidebar>
  <router-view />
</template>

<style>
</style>
<style scoped>
</style>
