export interface Article {
  id: number
  createdAt: string
  title: string
  tagId?: number
  tag?: string
}

export type TagType = 'HTML' | 'CSS' | 'JS'

export type Filter = 'ALL' | 'CSS' | 'HTML' | 'JS' | 'TUTORIAL' | 'SEARCH'
