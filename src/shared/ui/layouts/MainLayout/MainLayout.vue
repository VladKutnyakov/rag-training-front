<template>
  <div class="main-layout">
    <div class="layout-sidebar">
      <slot name="sidebar" />
    </div>
    <main class="layout-main">
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  display: grid;
  grid-template-columns: 2fr 8fr;
  min-height: 100vh;
}

.layout-main {
  padding: 1rem;
}
</style>
