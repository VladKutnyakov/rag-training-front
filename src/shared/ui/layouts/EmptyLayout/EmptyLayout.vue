<template>
  <div class="empty-layout">
    <main class="layout-main">
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
.empty-layout {
  display: grid;
  min-height: 100vh;
}

.layout-main {
  padding: 1rem;
}
</style>
