<template>
  <div class="wrapper">
    <div class="auth-block">
      <div class="logo">
        <img :src="logo">
      </div>
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
      <Divider
        align="center"
      >
        <b>или</b>
      </Divider>
      <Button
        label="Регистрация"
        variant="link"
        fluid
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, FormField } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { Button, Divider, InputText, Message, Password } from 'primevue'
import { ref } from 'vue'
import * as z from 'zod'
import { ragTrainingLogo, logo } from '@/shared/assets/images'

const initialValues = ref({
  email: '',
  password: '',
})

const schema = z.object({
  email: z.string().regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Неверно введен email'),
  password: z.string().min(4, 'Минимальная длина пароля - 4 символа'),
})

const resolver = zodResolver(schema)

function submitForm() {
  //
}
</script>

<style scoped>
.wrapper {
  flex: 300px 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .auth-block {
    width: 300px;

    & .logo {
      display: flex;
      justify-content: center;

      & img {
        width: 6rem;
        height: 6rem;
        object-fit: contain;
      }

      html.dark & img {
        filter: invert(1);
      }
    }
  }
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
