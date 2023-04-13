<template>
  <ul class="share-icons">
    <TwitterIcon class="icon" />
    <FacebookIcon class="icon" />
    <LinkedInIcon class="icon" />
  </ul>
</template>

<script setup lang="ts">
import FacebookIcon from '@/assets/icons/facebook.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
</script>

<style scoped>
.share-icons {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.icon {
  cursor: pointer;
  width: 30px;
  fill: #999;
  transition: 100ms;
  margin-bottom: 5px;
}

.icon:hover {
  fill: var(--bg-color);
}
</style>
