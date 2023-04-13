import { defineStore } from 'pinia'
import { axiosInstance } from '@/utils/axios'
import type { Article, Filter, TagType } from '@/types/article'

interface Tag {
  id: number
  title: TagType
}

interface ArticlesStoreState {
  articles: Article[]
  currentArticle?: Article
  filter: Filter
  search: string
  isLoading: boolean
  showSearchBar: boolean
  error?: string
}

export const useArticlesStore = defineStore('articles', {
  state: (): ArticlesStoreState => ({
    articles: [],
    filter: 'ALL',
    currentArticle: undefined,
    search: '',
    showSearchBar: false,
    error: undefined,
    isLoading: false
  }),

  actions: {
    setFilter(value: Filter) {
      this.filter = value
    },

    setSearch(value: string) {
      this.search = value
    },

    setShowSearchBar(value: boolean) {
      this.showSearchBar = value
    },

    async getArticles() {
      this.isLoading = true
      this.error = undefined

      try {
        const [articlesResponse, tagsResponse] = await Promise.all([
          axiosInstance.get<Article[]>(
            this.search ? '/articles?title_like=' + this.search : '/articles'
          ),
          axiosInstance.get<Tag[]>('/tags')
        ])

        const articles = articlesResponse.data
        const tags = tagsResponse.data

        this.articles = articles.map((article) => {
          const tag = tags.find((tag) => tag.id === article.tagId)

          return {
            id: article.id,
            createdAt: article.createdAt,
            title: article.title,
            blocks: article.blocks,
            tag: tag?.title
          }
        })
      } catch (e) {
        this.error = (e as Error).message
      } finally {
        this.isLoading = false
      }
    },

    async getArticleById(id: number) {
      this.isLoading = true
      this.error = undefined

      try {
        const articleResponse = await axiosInstance.get<Article>('/articles/' + id)
        this.currentArticle = articleResponse.data
        const tagResponse = await axiosInstance.get<Tag>('/tags/' + this.currentArticle.tagId)
        this.currentArticle.tag = tagResponse.data.title
      } catch (e) {
        this.error = (e as Error).message
      } finally {
        this.isLoading = false
      }
    }
  },

  getters: {
    filteredArticles(): Article[] {
      if (this.filter === 'ALL') {
        return this.articles
      }

      return this.articles.filter((article) => article.tag === this.filter)
    }
  }
})
