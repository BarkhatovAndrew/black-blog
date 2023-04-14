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

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
  align-items: center;
  height: 33rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    padding: 2rem 0 5rem;
  }

  @media (max-width: 870px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 800px) {
    height: fit-content;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.header-img {
  height: 100%;

  @media (max-width: 1000px) {
    object-fit: contain;
  }

  @media (max-width: 800px) {
    display: none;
  }
}

.header-title {
  font-size: 8.2rem;
  margin: 0;
  text-shadow: 2px 0 0 #ce5937, 0 2px 0 #5599d4, 0 -2px 0 #c4ad51;

  @media (max-width: 1200px) {
    font-size: 6.6rem;
  }

  @media (max-width: 500px) {
    font-size: 5rem;
  }
}

.header-subtitle {
  color: var(--text-secondary-color);
  margin: 0;
  font-size: 2rem;

  @media (max-width: 630px) {
    display: none;
  }
}

.title-block {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  height: 100%;
  margin: 0 4.8rem;
  max-width: 70rem;

  @media (max-width: 1200px) {
    margin: 0 3rem;
  }

  @media (max-width: 1000px) {
    margin-right: 0;
  }

  @media (max-width: 800px) {
    margin: 0;
  }
}
</style>
