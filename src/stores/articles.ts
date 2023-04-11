import { defineStore } from 'pinia'
import type { Article, TagType } from '@/types/article'
import { axiosInstance } from '@/utils/axios'

interface Tag {
  id: number
  title: TagType
}

interface ArticlesStoreState {
  articles: Article[]
  isLoading: boolean
  error?: string
}

export const useArticlesStore = defineStore('articles', {
  state: (): ArticlesStoreState => ({
    articles: [],
    error: undefined,
    isLoading: false
  }),
  actions: {
    async getArticles() {
      this.isLoading = true
      this.error = undefined

      try {
        const [articlesResponse, tagsResponse] = await Promise.all([
          axiosInstance.get<Article[]>('/articles'),
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
            tag: tag?.title
          }
        })
      } catch (e) {
        this.error = (e as Error).message
      } finally {
        this.isLoading = false
      }
    }
  }
})
