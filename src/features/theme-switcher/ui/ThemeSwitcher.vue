<template>
  <Button
    :icon="themeIcon"
    @click="toggleDarkMode()"
  />
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const mode = useColorMode()

const themeIcon = computed(() => {
  switch (mode.value) {
    case 'light':
      return 'pi pi-sun'
    case 'dark':
      return 'pi pi-moon'
  }
  return undefined
})

function toggleDarkMode() {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>
