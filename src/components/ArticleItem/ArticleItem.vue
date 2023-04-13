<template>
  <RouterLink :to="'/article/' + props.article.id" class="article-item">
    <div class="info">
      <p :style="{ color }" class="tag">{{ props.article.tag }}</p>
      <p class="date">{{ props.article.createdAt }}</p>
    </div>
    <p class="title">{{ props.article.title }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { tagColorMap } from '@/utils/tagColorMap'
import type { Article, TagType } from '@/types/article'

interface ArticleItemProps {
  article: Article
}

const props = defineProps<ArticleItemProps>()

const color = computed(() => tagColorMap[props.article.tag as TagType])
</script>

<style scoped>
.article-item {
  cursor: pointer;
  position: relative;
  border: 0.5px solid var(--border-article-color);
  outline: 0.5px solid var(--border-article-color);
  width: 298px;
  height: 298px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  transition: scale 100ms;
}

.article-item:hover {
  scale: 1.02;
  z-index: 1;
  background: var(--bg-color);
}

.info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.tag {
  font-size: 16px;
  margin: 0 0 8px;
}

.date {
  font-size: 16px;
  margin: 0;
  color: var(--text-secondary-color);
}

.title {
  font-size: 22px;
}
</style>
