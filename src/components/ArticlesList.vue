<template>
  <div v-if="articlesStore.isLoading" class="articles-list">
    <ArticleItemSkeleton v-for="(_, i) in 8" :key="i" />
  </div>
  <div v-else class="articles-list">
    <ArticleItem
      v-for="article in articlesStore.filteredArticles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useArticlesStore } from '@/stores/articles'
import ArticleItem from '@/components/ArticleItem/ArticleItem.vue'
import ArticleItemSkeleton from '@/components/ArticleItem/ArticleItemSkeleton.vue'

const articlesStore = useArticlesStore()

onMounted(() => {
  articlesStore.getArticles()
})
</script>

<style scoped>
.articles-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
