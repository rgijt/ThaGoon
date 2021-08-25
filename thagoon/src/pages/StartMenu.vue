<template>
  <div class="main">
    <div class="logo">
      <h1>ThaGoon</h1>
    </div>
    <ul class="menu">
      <li>Start</li>
      <li>Score</li>
      <li>Settings</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StartMenu',
};
</script>

<style>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul.menu {
  list-style-type: none;
}
ul.menu li {
  background-color: red;
  margin: 10px;
  padding: 20px;
}
</style>
