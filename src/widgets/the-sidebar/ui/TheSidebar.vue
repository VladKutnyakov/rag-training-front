<template>
  <div class="sidebar">
    <div class="company">
      <RouterLink
        class="link"
        :to="{ name: 'home' }"
      >
        Rag
      </RouterLink>
    </div>

    <div class="new-chat">
      <Button
        label="Новый чат"
        icon="pi pi-plus"
        @click="createChat"
      />
    </div>

    <div class="document-list">
      <DocumentLink
        v-for="item in documents"
        :key="item.id"
        :document="item"
        :is-active="getDocumentLinkIsActive(item)"
      />
    </div>

    <div class="theme-switcher">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { ThemeSwitcher } from '@features/theme-switcher'
import { onMounted, ref } from 'vue'
import { DocumentLink, getDocuments, type DocumentDto } from '@entities/document'
import { useRoute } from 'vue-router'

const route = useRoute()

const documents = ref<DocumentDto[]>([])

function getDocumentLinkIsActive(doc: DocumentDto) {
  return (route.name === 'chat' && Number(route.params.id) === doc.id)
}

function createChat() {
  //
}

onMounted(() => {
  documents.value = getDocuments()
})
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  background-color: var(--p-sidebar-background);
}

.company {
  padding: 0.5rem 0 2rem 0;
  font-size: 1.5rem;
}

.company .link {
  font-weight: bold;
  text-decoration: none;
  color: unset;
}

.new-chat .p-button {
  width: 100%;
}

.document-list {
  display: flex;
  flex: 100% 1 1;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0 0 0;
}

.theme-switcher {
  display: flex;
  justify-content: end;
}
</style>
