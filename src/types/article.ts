export interface ArticleBlockText {
  id: number
  text: string
  title?: string
  type: 'text'
}

export interface ArticleBlockCode {
  id: number
  code: string
  type: 'code'
}

export interface ArticleBlockImage {
  id: number
  src: string
  capture: string
  type: 'image'
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage

export interface Article {
  id: number
  createdAt: string
  title: string
  blocks: ArticleBlock[]
  tagId?: number
  tag?: string
}

export type TagType = 'HTML' | 'CSS' | 'JS'

export type Filter = 'ALL' | 'CSS' | 'HTML' | 'JS' | 'TUTORIAL' | 'SEARCH'
