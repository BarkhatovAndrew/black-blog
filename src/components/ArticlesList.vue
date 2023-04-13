<template>
  <div v-if="articlesStore.isLoading" class="articles-list">
    <ArticleItemSkeleton v-for="(_, i) in 3" :key="i" />
  </div>

  <div v-else-if="articlesStore.filteredArticles.length" class="articles-list">
    <ArticleItem
      v-for="article in articlesStore.filteredArticles"
      :key="article.id"
      :article="article"
    />
  </div>

  <div v-else class="not-found">
    <h3>Articles not found</h3>
    <img src="../assets/images/giphy.gif" alt="not-found" class="not-found-img" />
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

.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.not-found-img {
  height: 200px;
  object-fit: contain;
}
</style>
