<template>
  <Transition>
    <div class="input-wrapper">
      <input
        class="search-bar"
        v-model="state.value"
        :type="type"
        :placeholder="placeholder"
        @input="onInput?.(state.value)"
      />
      <CloseIcon v-if="onClose" @click="onClose" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CloseIcon from '@/components/CloseIcon.vue'

interface SearchBarProps {
  type?: string
  placeholder?: string
  onInput?: (...args: any[]) => void
  onClose?: () => void
}

withDefaults(defineProps<SearchBarProps>(), {
  type: 'text'
})

const state = reactive({
  value: ''
})
</script>

<style scoped>
.input-wrapper {
  position: relative;
}

.search-bar {
  width: 100%;
  padding: 20px 50px 20px 20px;
  height: 40px;
  outline: none;
  border: none;
  margin-bottom: 40px;
}
</style>
