<template>
  <header class="header">
    <img src="../assets/images/JavaScript-logo.png" alt="JavaScript logo" class="header-img" />
    <div class="title-block">
      <h1 class="header-title">JavaScript Blog</h1>
      <p class="header-subtitle">Front-end blog</p>
    </div>
    <Navigation />
  </header>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  align-items: center;
  height: 330px;
}

.header-img {
  height: 100%;
}

.header-title {
  width: 300px;
  font-size: 82px;
  margin: 0;
  text-shadow: 2px 0 0 #ce5937, 0 2px 0 #5599d4, 0 -2px 0 #c4ad51;
}

.header-subtitle {
  color: var(--text-secondary-color);
  margin: 0;
  font-size: 20px;
}

.title-block {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  height: 100%;
  margin-left: 48px;
}
</style>
