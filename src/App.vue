<template>
  <component :is="layout">
    <template #sidebar>
      <TheSidebar />
    </template>
    <template #main>
      <RouterView />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { MainLayout } from '@shared/ui/layouts'
import TheSidebar from '@widgets/the-sidebar'

const route = useRoute()

const layout = computed(() => route.meta.layout || MainLayout)
</script>

<style>
@import '@shared/assets/styles/fonts.css';

#app {
  font-family: "Roboto", sans-serif;
}
</style>
