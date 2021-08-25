<template>
  <div class="footer">
    <span class="credits">Made by Robert de Gijt</span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
div.footer {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
}
div.footer .credits {
  font-style: italic;
}
</style>
