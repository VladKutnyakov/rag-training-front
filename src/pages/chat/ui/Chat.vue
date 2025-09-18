<template>
  <div class="wrapper">
    <div class="messages">
      <Message
        v-for="item in messages"
        :key="item.id"
        :message="item"
      />
    </div>
    <div class="userinput">
      <Textarea
        ref="textareaRef"
        v-model="newMessage"
        rows="3"
      />
      <Button
        icon="pi pi-send"
        severity="primary"
        variant="outlined"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { onMounted, ref, useTemplateRef, type ComponentPublicInstance } from 'vue'
import { useEventListener, useFocus } from '@vueuse/core'
import { Message, getMessages, type MessageDto } from '@entities/message'

const messages = ref<MessageDto[]>([])
const newMessage = ref('')

const textareaRef = useTemplateRef<ComponentPublicInstance>('textareaRef')

const { focused } = useFocus(textareaRef)

useEventListener(document, 'keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey && focused.value) {
    event.preventDefault()
  }
})

onMounted(() => {
  messages.value = getMessages()
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 5rem;
}

.messages {
  flex: 1 1 100%;
}

.userinput {
  display: flex;
  position: sticky;
  bottom: 1rem;
}

.userinput .p-textarea {
  flex: 100% 1 1;
  resize: none;
}
</style>
