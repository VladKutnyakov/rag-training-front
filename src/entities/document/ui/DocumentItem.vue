<template>
  <RouterLink
    class="document-item"
    :class="{ 'document-item__active': isActive }"
    :to="{ name: 'document', params: { id: document.id } }"
  >
    <div class="extension">
      {{ document.extension }}
    </div>
    <div class="name">
      {{ document.name }}
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { DocumentDto } from '../model'

defineProps<{
  document: DocumentDto
  isActive: boolean
}>()
</script>

<style scoped>
.document-item {
  display: flex;
  padding: 0.5rem 0.25rem;
  text-decoration: unset;
  color: initial;
  border-radius: 0.5rem;
}

.document-item:hover,
.document-item:focus {
  cursor: pointer;
  outline: 1px solid black;
}

.document-item__active {
  background-color: #7d7d7d;
}

.extension {
  width: 3rem;
}
</style>
