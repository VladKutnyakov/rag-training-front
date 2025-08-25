<template>
  <div
    class="message"
    :class="[
      { 'sent': message.type === 'SENT' },
      { 'recieved': message.type === 'RECIEVED' },
    ]"
  >
    <div class="text">
      {{ message.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MessageDto } from '../model'

defineProps<{
  message: MessageDto
}>()
</script>

<style scoped>
.message {
  display: flex;
  padding: 1rem;
}

.message.sent {
  justify-content: end;
}

.message.recieved {
  justify-content: start;
}

.text {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
}

.message.sent .text {
  background-color: #e7ffd3;
}

.message.recieved .text {
  background-color: #d3d3d3;
}
</style>
