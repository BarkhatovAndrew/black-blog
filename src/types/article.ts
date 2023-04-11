export interface Article {
  id: number
  createdAt: string
  title: string
  tagId?: number
  tag?: string
}

export type TagType = 'HTML' | 'CSS' | 'JS'
