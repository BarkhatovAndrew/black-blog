<template>
  <h2 v-if="block.title" class="title">{{ block.title }}</h2>
  <p class="text">{{ block.text }}</p>
</template>

<script setup lang="ts">
import type { ArticleBlockText } from '@/types/article'

interface ArticleTextBlockProps {
  block: ArticleBlockText
}

defineProps<ArticleTextBlockProps>()
</script>

<style lang="scss" scoped>
.text {
  font-family: 'Open Sans', serif;
  line-height: 24px;
  color: var(--text-color-inverted);
}

.title {
}
</style>
