<template>
  <Header />
  <SearchBar
    placeholder="Search..."
    :on-input="fetchArticlesSearch"
    :show="articlesStore.showSearchBar"
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

const fetchArticlesSearch = debounce((value: string) => {
  articlesStore.setSearch(value)
  articlesStore.getArticles()
})
</script>
