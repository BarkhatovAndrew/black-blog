<template>
  <footer class="footer">
    <a href="https://dribbble.com/shots/7033826-Developer-s-blog/" target="_blank" class="link">
      Inspired by Denis Danilov's design
    </a>
  </footer>
</template>

<style scoped>
.footer {
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
}

.link {
  position: relative;
  z-index: 1;
}

.link:after {
  content: '';
  position: absolute;
  top: 12px;
  z-index: -1;
  left: 0;
  width: 0;
  height: 5px;
  background: var(--blue-color);
  transition: width 200ms ease;
}

.link:hover:after {
  width: 100%;
}
</style>
