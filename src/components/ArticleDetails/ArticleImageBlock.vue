<template>
  <img :src="block.src" :alt="block.capture" class="image" />
  <span class="capture">{{ block.capture }}</span>
</template>

<script setup lang="ts">
import type { ArticleBlockImage } from '@/types/article'

interface ArticleTextBlockProps {
  block: ArticleBlockImage
}

defineProps<ArticleTextBlockProps>()
</script>

<style scoped>
.image {
  width: 100%;
}

.capture {
  display: block;
  color: var(--text-secondary-color);
  text-align: center;
}
</style>
