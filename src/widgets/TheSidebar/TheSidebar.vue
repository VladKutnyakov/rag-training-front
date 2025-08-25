<template>
  <div class="sidebar">
    <div class="company">
      <RouterLink
        class="link"
        :to="{ name: 'home' }"
      >
        Rag training
      </RouterLink>
    </div>
    <FileUpload>
      <template #header="{ chooseCallback, files }">
        <div class="file-header-button">
          <Button
            icon="pi pi-upload"
            severity="primary"
            variant="outlined"
            @click="chooseCallback"
          />
        </div>
      </template>
      <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback, messages }">
        <div
          v-for="(file, index) in files"
          :key="index"
          class="file-content-name"
        >
          {{ file.name }}
        </div>
      </template>
      <template #empty>
        <div class="file-empty-message">
          Перетащите файл
        </div>
      </template>
    </FileUpload>

    <div class="document-list">
      <DocumentLink
        v-for="item in documents"
        :key="item.id"
        :document="item"
        :is-active="getDocumentLinkIsActive(item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import { onMounted, ref } from 'vue'
import { DocumentLink, getDocuments, type DocumentDto } from '@/entities/document'
import { useRoute } from 'vue-router'

const route = useRoute()

const documents = ref<DocumentDto[]>([])

function getDocumentLinkIsActive(doc: DocumentDto) {
  return (route.name === 'chat' && Number(route.params.id) === doc.id)
}

onMounted(() => {
  documents.value = getDocuments()
})
</script>

<style scoped>
.sidebar {
  height: 100%;
  padding: 1rem;
  background-color: #d8d8d8;
}

.company {
  padding: 0 0 1rem 0;
  font-size: 1.5rem;
  text-transform: lowercase;
}

.company .link {
  text-decoration: none;
  color: unset;
}

.sidebar :deep(.p-fileupload-header) {
  padding: 0;
}

.sidebar :deep(.p-fileupload-content) {
  padding: 1.125rem;
}

.file-header-button {
  width: 100%;
  display: flex;
  justify-content: center;
}

.file-header-button .p-button {
  width: 100%;
}

.file-content-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: initial;
}

.file-empty-message {
  display: flex;
  justify-content: center;
  text-align: center;
}

.document-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0 0 0;
}
</style>
