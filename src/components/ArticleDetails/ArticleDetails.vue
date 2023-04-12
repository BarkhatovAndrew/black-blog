<template>
  <p v-if="articlesStore.isLoading">Loading...</p>
  <div v-if="articlesStore.currentArticle" class="article">
    <BackButton class="back-button" />
    <ul class="share-icons">
      <TwtitterIcon class="icon" />
      <FacebookIcon class="icon" />
      <LinkedInIcon class="icon" />
    </ul>
    <div class="content">
      <span class="tag" :style="{ color }">{{ articlesStore.currentArticle?.tag }}</span>
      <span class="date">{{ articlesStore.currentArticle?.createdAt }}</span>
      <h1 class="title">{{ articlesStore.currentArticle?.title }}</h1>
      <div v-for="block in articlesStore.currentArticle.blocks" :key="block.id">
        <ArticleTextBlock v-if="block.type === 'text'" :block="block" />
        <ArticleCodeBlock v-if="block.type === 'code'" :block="block" />
        <ArticleImageBlock v-if="block.type === 'image'" :block="block" />
      </div>
    </div>
    <Navigation inverted class="nav" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'
import FacebookIcon from '@/assets/icons/facebook.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import TwtitterIcon from '@/assets/icons/twitter.svg'
import BackButton from '@/components/BackButton.vue'
import Navigation from '@/components/Navigation.vue'
import ArticleTextBlock from '@/components/ArticleDetails/ArticleTextBlock.vue'
import ArticleCodeBlock from '@/components/ArticleDetails/ArticleCodeBlock.vue'
import ArticleImageBlock from '@/components/ArticleDetails/ArticleImageBlock.vue'
import { tagColorMap } from '@/utils/tagColorMap'
import type { TagType } from '@/types/article'

const route = useRoute()
const articlesStore = useArticlesStore()

articlesStore.getArticleById(Number(route.params.id))

const color = computed(() => tagColorMap[articlesStore.currentArticle?.tag as TagType])
</script>

<style scoped>
.article {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background: var(--bg-color-inverted);
  margin: 40px;
  color: var(--text-color-inverted);
}

.share-icons {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.content {
  width: 600px;
}

.tag {
  margin-right: 10px;
}

.title {
  font-size: 44px;
  margin-top: 20px;
  margin-bottom: 0;
}

.icon {
  cursor: pointer;
  width: 30px;
  fill: #999;
  transition: 100ms;
  margin-bottom: 5px;
}

.icon:hover {
  fill: var(--bg-color);
}

.back-button {
  position: absolute;
  top: 8px;
  left: 50%;
}
</style>
