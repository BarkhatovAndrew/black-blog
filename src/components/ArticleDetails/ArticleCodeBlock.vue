<template>
  <pre class="code-block"><highlightjs autodetect :code="block.code" /></pre>
</template>

<script setup lang="ts">
import type { ArticleBlockCode } from '@/types/article'

interface ArticleTextBlockProps {
  block: ArticleBlockCode
}

defineProps<ArticleTextBlockProps>()
</script>

<style scoped>
.code-block {
  font-family: Source Code Pro, serif;
  background: var(--bg-color-code);
  padding: 15px 35px;
}
</style>
