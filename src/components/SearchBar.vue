<template>
  <div class="input-wrapper" v-if="state.show">
    <input
      class="search-bar"
      :type="type"
      :placeholder="placeholder"
      @input="onInput(state.value)"
      v-model="state.value"
    />
    <CloseIcon @click="state.show = false" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CloseIcon from '@/components/CloseIcon.vue'

// TODO: extend Input
interface SearchBarProps {
  show?: boolean
  type?: string
  placeholder: string
  onInput: (...args: any[]) => void
}

const props = withDefaults(defineProps<SearchBarProps>(), {
  show: true,
  input: 'text'
})

const state = reactive({
  value: '',
  show: props.show
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
