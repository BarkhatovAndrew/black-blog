<template>
  <header class="header">
    <img src="../assets/images/JavaScript-logo.png" alt="JavaScript logo" class="header-img" />
    <div class="title-block">
      <h1 class="header-title">JavaScript Blog</h1>
      <p class="header-subtitle">Front-end blog</p>
    </div>
    <nav>
      <ul class="nav-list">
        <li>All posts</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tutorials</li>
        <li>Search</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  align-items: center;
}

.header-img {
  width: 200px;
  height: 200px;
}

.header-title {
  width: 300px;
  font-size: 60px;
  margin: 0;
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
</style>
