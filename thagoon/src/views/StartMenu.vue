<template>
  <div class="main">
    <div class="logo">
      <h1>ThaGoon</h1>
    </div>
    <ul class="menu">
      <router-link to="/game">
        <li class="start"><b>start</b></li>
      </router-link>
    </ul>
    <div class="score">
      <img src="../assets/icons/trophy.svg" />
    </div>
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
ul.menu li {
  margin: 20px 40px;
  padding: 5px;
  color: #ffffff;
  background-color: #087e8b;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
}
ul.menu li:hover {
  transform: scale(1.02);
}
ul.menu li.start {
  font-size: 4em;
  background-color: #ff5a5f;
}
</style>
