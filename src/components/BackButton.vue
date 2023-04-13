<template>
  <button class="back-button" @click="router.back">← Back</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.back-button {
  border: none;
  white-space: nowrap;
  cursor: pointer;
  background: none;
  color: var(--text-color);
}
</style>
