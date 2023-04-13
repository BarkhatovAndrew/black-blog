<template>
  <nav role="navigation" :class="{ inverted }">
    <ul class="nav-list">
      <li
        v-for="navLink in navLinks"
        :key="navLink.id"
        class="nav-link"
        :class="{ active: articlesStore.filter === navLink.value }"
        @click="setFilter(navLink.value)"
      >
        {{ navLink.title }}
      </li>
      <li class="nav-link" @click="articlesStore.setShowSearchBar(true)">Search</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import { navLinks } from '@/utils/navLinks'
import type { Filter } from '@/types/article'

interface NavigationProps {
  inverted?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<NavigationProps>(), {
  inverted: false,
  readonly: false
})

const articlesStore = useArticlesStore()

const setFilter = (value: Filter) => {
  if (!props.readonly) {
    articlesStore.setFilter(value)
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  padding-left: 0;
  margin: 0;
  list-style: none;
  line-height: 36px;
}

.nav-link {
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--bg-color-inverted);
  transition: 150ms;
}

.nav-link:hover {
  box-shadow: inset 100px 0 0 0 var(--bg-color-inverted);
  color: var(--text-color-inverted);
}

.active {
  cursor: default;
  background: var(--bg-color-inverted);
  color: var(--text-color-inverted);
}

.inverted {
  .nav-link {
    cursor: default;
    box-shadow: inset 0 0 0 0 var(--bg-color);
  }

  .active {
    color: var(--bg-color-inverted);
    background: var(--text-color-inverted);
  }
}
</style>
