<template>
  <header class="header">
    <img src="../assets/images/JavaScript-logo.png" alt="JavaScript logo" class="header-img" />
    <div class="title-block">
      <h1 class="header-title">JavaScript Blog</h1>
      <p class="header-subtitle">Front-end blog</p>
    </div>
    <nav>
      <ul class="nav-list">
        <li class="menu-item active">All posts</li>
        <li class="menu-item">HTML</li>
        <li class="menu-item">CSS</li>
        <li class="menu-item">JavaScript</li>
        <li class="menu-item">Tutorials</li>
        <li class="menu-item">Search</li>
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

.menu-item {
  cursor: pointer;
}

.menu-item:hover {
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}

.active {
  cursor: default;
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}
</style>
