<template>
  <Form
    :initial-values
    :resolver
    class="auth-form"
    @submit="submitForm"
  >
    <FormField
      v-slot="$field"
      class="field"
      name="email"
    >
      <InputText
        type="text"
        placeholder="Email"
        fluid
      />
      <Message
        v-if="$field.invalid"
        severity="error"
        size="small"
        variant="simple"
      >
        {{ $field.error.message }}
      </Message>
    </FormField>
    <FormField
      v-slot="$field"
      class="field"
      name="password"
    >
      <Password
        placeholder="Пароль"
        :feedback="false"
        toggle-mask
        fluid
      />
      <Message
        v-if="$field.invalid"
        severity="error"
        size="small"
        variant="simple"
      >
        {{ $field.error.message }}
      </Message>
    </FormField>
    <Button
      type="submit"
      label="Войти"
      fluid
    />
  </Form>
</template>

<script setup lang="ts">
import { Form, FormField, type FormSubmitEvent } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { Button, InputText, Message, Password } from 'primevue'
import * as z from 'zod'

const emit = defineEmits<{
  submit: [values: FormFields]
}>()

interface FormFields {
  email: string
  password: string
}

const initialValues: FormFields = {
  email: '',
  password: '',
}

const schema = z.object({
  email: z.string().regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Неверно введен email'),
  password: z.string().min(4, 'Минимальная длина пароля - 4 символа'),
})

const resolver = zodResolver(schema)

function submitForm(event: FormSubmitEvent) {
  const res = schema.safeParse(event.values)
  if (res.success) {
    emit('submit', res.data)
  }
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
