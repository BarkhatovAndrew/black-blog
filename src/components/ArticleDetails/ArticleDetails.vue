<template>
  <p v-if="articlesStore.isLoading">Loading...</p>
  <div class="container">
    <div class="article-back-block" ref="divRef" @mouseenter="throttledSetBackButtonPosition">
      <BackButton class="back-button" :style="{ left: state.backButtonPosition }" />
    </div>
    <div v-if="articlesStore.currentArticle" class="article">
      <ul class="share-icons">
        <TwitterIcon class="icon" />
        <FacebookIcon class="icon" />
        <LinkedInIcon class="icon" />
      </ul>
      <div class="content">
        <span class="tag" :style="{ color }">{{ articlesStore.currentArticle?.tag }}</span>
        <span class="date">{{ articlesStore.currentArticle?.createdAt }}</span>
        <h1 class="title">{{ articlesStore.currentArticle?.title }}</h1>
        <div v-for="block in articlesStore.currentArticle.blocks" :key="block.id">
          <ArticleTextBlock v-if="block.type === 'text'" :block="block" />
          <ArticleCodeBlock v-else-if="block.type === 'code'" :block="block" />
          <ArticleImageBlock v-else-if="block.type === 'image'" :block="block" />
        </div>
      </div>
      <Navigation inverted readonly class="nav" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'
import FacebookIcon from '@/assets/icons/facebook.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import BackButton from '@/components/BackButton.vue'
import Navigation from '@/components/Navigation.vue'
import ArticleTextBlock from '@/components/ArticleDetails/ArticleTextBlock.vue'
import ArticleCodeBlock from '@/components/ArticleDetails/ArticleCodeBlock.vue'
import ArticleImageBlock from '@/components/ArticleDetails/ArticleImageBlock.vue'
import { tagColorMap } from '@/utils/tagColorMap'
import type { TagType } from '@/types/article'
import { throttle } from '@/utils/throttle'

const route = useRoute()
const articlesStore = useArticlesStore()
const divRef = ref<null | HTMLDivElement>(null)

const state = reactive({
  backButtonPosition: '0px'
})

const color = computed(() => tagColorMap[articlesStore.currentArticle?.tag as TagType])

const setBackButtonPosition = (e: MouseEvent) => {
  if (divRef.value) {
    state.backButtonPosition = e.clientX - divRef.value.getBoundingClientRect().left - 40 + 'px'
  }
}

const throttledSetBackButtonPosition = throttle(setBackButtonPosition)

onMounted(() => {
  window.scrollTo(0, 0)
  articlesStore.getArticleById(Number(route.params.id))
})
</script>

<style scoped>
.container {
  position: relative;
}

.article {
  position: relative;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}

.article-back-block {
  height: 40px;
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
  left: 0;
  transition: 1000ms;
}
</style>
