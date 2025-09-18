<template>
  <div class="wrapper">
    <div class="auth-block">
      <div class="logo">
        <img :src="logo">
      </div>
      <LoginForm />
      <Divider align="center">
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
import { Button, Divider } from 'primevue'
import { logo } from '@/shared/assets/images'
import LoginForm from './LoginForm.vue'
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
</style>
