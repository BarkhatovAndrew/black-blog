<template>
  <pre class="code-block"><code>{{ block.code }}</code></pre>
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
  background: var(--bg-color-code);
  padding: 15px 35px;
}
</style>
