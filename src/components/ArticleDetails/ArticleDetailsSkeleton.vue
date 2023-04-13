<template>
  <div class="container">
    <div class="article">
      <div class="content">
        <div class="tag"></div>
        <div class="title"></div>
        <div class="blocks">
          <div v-for="(_, i) in 3" :key="i" class="block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  position: relative;
}

.article {
  position: relative;
  display: flex;
  justify-content: space-between;
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}

.content {
  width: 600px;
}

.tag {
  height: 20px;
  width: 100px;
  background: var(--text-secondary-color);
  margin-right: 10px;
  animation: blink 1.4s infinite;
}

.title {
  height: 44px;
  background: var(--text-secondary-color);
  margin-top: 20px;
  margin-bottom: 0;
  animation: blink 1.4s infinite;
}

.block {
  height: 160px;
  background: var(--text-secondary-color);
  margin-top: 20px;
  animation: blink 1.4s infinite;
}

@keyframes blink {
  0% {
    background: var(--text-secondary-color);
  }
  50% {
    background: var(--skeleton-blink-color);
  }
  100% {
    background: var(--text-secondary-color);
  }
}
</style>
