<template>
  <nav role="navigation" :class="state.isInverted">
    <ul class="nav-list">
      <li
        class="nav-link"
        v-for="navLink in navLinks"
        :class="state.isActive(navLink)"
        :key="navLink.id"
        @click="setFilter(navLink.value)"
      >
        {{ navLink.title }}
      </li>
      <li class="nav-link" @click="showSearchBar">Search</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import { type NavLink, navLinks } from '@/utils/navLinks'
import type { Filter } from '@/types/article'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

interface NavigationProps {
  inverted?: boolean
}

const props = withDefaults(defineProps<NavigationProps>(), {
  inverted: false
})

const state = reactive({
  isInverted: { inverted: props.inverted },
  isActive: (navLink: NavLink) => ({ active: articlesStore.filter === navLink.value })
})

const articlesStore = useArticlesStore()
const router = useRouter()

const showSearchBar = () => {
  articlesStore.setShowSearchBar(true)
}

const setFilter = (value: Filter) => {
  articlesStore.setFilter(value)
  if (props.inverted) {
    router.back()
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
    box-shadow: inset 0 0 0 0 var(--bg-color);
  }

  .nav-link:hover {
    box-shadow: inset 100px 0 0 0 var(--text-color-inverted);
    color: var(--bg-color-inverted);
  }

  .active {
    color: var(--bg-color-inverted);
    background: var(--text-color-inverted);
  }
}
</style>
