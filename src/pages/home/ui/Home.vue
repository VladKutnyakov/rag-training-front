<template>
  <div class="wrapper">
    <div
      ref="dropzoneRef"
      class="dropzone"
      :class="{ 'over': isOverDropZone }"
    >
      <div class="upload">
        <FileUpload
          name="document[]"
          :max-file-size="1000000"
          choose-label="Выбрать"
          @select="selectFile($event.files)"
        >
          <template #header="{ chooseCallback }">
            <div class="upload-header">
              <Button
                size="large"
                @click="chooseCallback"
              >
                Выбрать
              </Button>
            </div>
          </template>
          <template #content>
            {{ selectedFile?.name }}
          </template>
          <template
            v-if="!selectedFile"
            #empty
          >
            Переместите или выберите файл
          </template>
        </FileUpload>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { Button, FileUpload } from 'primevue'
import { ref, useTemplateRef } from 'vue'

const dropzoneRef = useTemplateRef('dropzoneRef')

const { isOverDropZone } = useDropZone(dropzoneRef, {
  onDrop: selectFile,
  multiple: false,
  preventDefaultForUnhandled: true,
})

const selectedFile = ref<File | null>(null)

function selectFile(files: File[] | null) {
  selectedFile.value = files?.[0] ?? null
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.dropzone {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.dropzone.over {
  outline: 0.25rem dashed var(--p-primary-500);
  border-radius: 1rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: var(--p-surface-500);
    opacity: 0.2;
  }
}

.text {
  display: block;
}

.p-fileupload {
  border: none;
}

:deep(.p-fileupload-header) {
  justify-content: center;
}
</style>
