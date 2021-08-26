<template>
  <footer>
    <span class="credits">Made by Robert de Gijt</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
}
footer .credits {
  font-style: italic;
}
</style>
