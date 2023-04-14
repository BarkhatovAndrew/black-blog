<template>
  <Header />
  <SearchBar
    placeholder="Search..."
    v-show="articlesStore.showSearchBar"
    :on-input="debounceInitArticlesSearch"
    :on-close="closeSearchBar"
  />
  <ArticlesList />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import ArticlesList from '@/components/ArticlesList.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useArticlesStore } from '@/stores/articles'
import { debounce } from '@/utils/debounce'

const articlesStore = useArticlesStore()

const debounceInitArticlesSearch = debounce((value: string) => {
  articlesStore.setSearch(value)
  articlesStore.getArticles()
})

const closeSearchBar = () => {
  articlesStore.setShowSearchBar(false)
  if (articlesStore.search) {
    articlesStore.setSearch('')
    articlesStore.getArticles()
  }
}
</script>

<style>
.v-enter-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-40px);
}
</style>
