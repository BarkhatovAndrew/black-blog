<template>
  <p v-if="articlesStore.isLoading">Loading...</p>
  <div class="articles-list">
    <ArticleItem v-for="article in articlesStore.articles" :key="article.id" :article="article" />
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import ArticleItem from '@/components/ArticleItem.vue'

const articlesStore = useArticlesStore()

articlesStore.getArticles()
</script>

<style scoped>
.articles-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
