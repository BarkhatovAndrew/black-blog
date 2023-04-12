<template>
  <header class="header">
    <img src="../assets/images/JavaScript-logo.png" alt="JavaScript logo" class="header-img" />
    <div class="title-block">
      <h1 class="header-title">JavaScript Blog</h1>
      <p class="header-subtitle">Front-end blog</p>
    </div>
    <nav role="navigation">
      <ul class="nav-list">
        <li
          v-for="navLink in navLinks"
          :key="navLink.id"
          class="nav-link"
          :class="{ active: articlesStore.filter === navLink.value }"
          @click="articlesStore.setFilter(navLink.value)"
        >
          {{ navLink.title }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import { navLinks } from '@/utils/navLinks'

const articlesStore = useArticlesStore()
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

.nav-list {
  padding-left: 0;
  list-style: none;
  line-height: 36px;
}

.nav-link {
  cursor: pointer;
}

.nav-link:hover {
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}

.active {
  cursor: default;
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}
</style>
