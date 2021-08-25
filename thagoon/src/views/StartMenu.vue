<template>
  <div class="main">
    <div class="header">
      <div class="logout-btn"></div>
      <div class="settings-btn"></div>
    </div>
    <div class="logo">
      <h1>ThaGoon</h1>
    </div>
    <ul class="menu">
      <li class="start">Start</li>
      <li>Score</li>
      <li>Settings</li>
    </ul>
    <div class="footer">
      <i>Made by Robert de Gijt</i>
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
  background-color: #f5f5f5;
}

div.header {
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  justify-content: space-between;
}
div.header div {
  height: 64px;
  width: 64px;
  background-color: grey;
  margin: 20px 40px 40px 40px;
  border-radius: 50%;
}

div.logo {
  color: #3c3c3c;
}
ul.menu {
  list-style-type: none;
}
ul.menu li {
  margin: 20px 40px;
  padding: 20px;
  color: #ffffff;
  background-color: #087e8b;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}
ul.menu li:hover {
  transform: scale(1.02);
}
ul.menu li.start {
  background-color: #ff5a5f;
}
</style>
