<template>
  <div class="article-item">
    <div class="info">
      <div class="tag"></div>
      <div class="date"></div>
    </div>
    <div class="title"></div>
    <div class="title"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.article-item {
  cursor: pointer;
  position: relative;
  flex-direction: column;
  border: 0.5px solid var(--border-article-color);
  outline: 0.5px solid var(--border-article-color);
  width: 298px;
  height: 298px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.tag {
  margin: 0 0 8px;
  width: 50px;
  height: 20px;
  background: var(--text-secondary-color);
  animation: blink 1.4s infinite;
}

.date {
  margin: 0;
  background: var(--text-secondary-color);
  width: 100px;
  height: 20px;
  animation: blink 1.4s infinite;
}

.title {
  width: 90%;
  height: 20px;
  background: var(--text-secondary-color);
  animation: blink 1.4s infinite;
}

.title:last-child {
  margin-top: 10px;
}

@keyframes blink {
  0% {
    background: var(--text-secondary-color);
  }
  50% {
    background: #6798ae;
  }
  100% {
    background: var(--text-secondary-color);
  }
}
</style>
