<template>
  <div v-if="articlesStore.isLoading" class="articles-list">
    <ArticleItemSkeleton v-for="(_, i) in 4" :key="i" />
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

<style lang="scss" scoped>
.articles-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
