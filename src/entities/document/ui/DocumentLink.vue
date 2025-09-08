<template>
  <RouterLink
    class="document-item"
    :class="{ 'document-item__active': isActive }"
    :to="{ name: 'chat', params: { id: document.id } }"
  >
    <div class="name">
      {{ document.name }}
    </div>
    <div class="extension">
      {{ document.extension }}
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
  padding: 0.5rem;
  text-decoration: unset;
  color: initial;
  border-radius: 0.5rem;
}

.document-item:hover,
.document-item:focus {
  cursor: pointer;
  outline: 1px solid var(--p-document-hover-background);
  background-color: var(--p-document-hover-background);
}

.document-item.document-item__active {
  background-color: var(--p-document-background);
}

.name {
  flex: 100% 1 1;
}
</style>
