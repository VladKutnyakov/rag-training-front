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
import MainLayout from '@shared/ui/layouts/MainLayout'
import TheSidebar from '@widgets/TheSidebar'

const route = useRoute()

const layout = computed(() => route.meta.layout || MainLayout)
</script>
