<template>
  <div class="close-icon">+</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.close-icon {
  cursor: pointer;
  transform: rotate(45deg);
  font-size: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  position: absolute;
  right: 10px;
  top: 0;
  transition: 200ms;
  line-height: 0;
}

.close-icon:hover {
  rotate: 180deg;
}
</style>
