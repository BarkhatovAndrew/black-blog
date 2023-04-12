import type { Filter } from '@/types/article'

interface NavLink {
  id: number
  title: string
  value: Filter
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: 'All posts',
    value: 'ALL'
  },
  {
    id: 2,
    title: 'HTML',
    value: 'HTML'
  },
  {
    id: 3,
    title: 'CSS',
    value: 'CSS'
  },
  {
    id: 4,
    title: 'JavaScript',
    value: 'JS'
  },
  {
    id: 5,
    title: 'Tutorials',
    value: 'TUTORIAL'
  },
  {
    id: 6,
    title: 'Search',
    value: 'SEARCH'
  }
]
