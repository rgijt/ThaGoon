<template>
  <footer>
    <span class="credits">
      Copyright &copy; 2021<br />
      Made by
      <a href="https://www.robertdegijt.nl/" target="__blank">Robert de Gijt</a>
    </span>
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
  background-color: #f5f5f5;
}
footer .credits {
  font-size: 1em;
  font-style: italic;
  margin-bottom: 5px;
  font-weight: 600;
}
footer .credits a {
  color: #3c3c3c;
  text-decoration: underline;
}
</style>
