<template>
  <div class="page">
    <div class="logo">
      <h1>ThaGoon</h1>
    </div>
    <ul class="menu">
      <router-link to="/game">
        <li class="btn start"><b>start</b></li>
      </router-link>
    </ul>

    <div class="score">
      <router-link to="/scores">
        <img src="../assets/icons/trophy.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartMenu',
};
</script>

<style scoped>
.page {
  justify-content: center;
  align-items: center;
}
div.logo {
  color: #3c3c3c;
  font-size: 3em;
  margin: -20px;
}
div.score {
  width: 64px;
  height: 64px;
}

ul.menu {
  width: 100%;
  list-style-type: none;
}
ul.menu li.start {
  margin: 20px 40px;
  font-size: 4em;
  background-color: #ff5a5f;
}
</style>
