<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { onMounted } from 'vue'
import { useLiffStore } from './stores/liffStore'
const liffStore = useLiffStore()

onMounted(async () => {
  await liffStore.initLiff()
})
</script>
