<template>
  <div class="main">
    <Header />
    <div class="logo">
      <h1>ThaGoon</h1>
    </div>
    <ul class="menu">
      <li class="start">start</li>
    </ul>
    <div class="score">
      <img src="./../assets/icons/trophy.svg" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './../components/Header.vue';
import Footer from './../components/Footer.vue';

export default {
  name: 'StartMenu',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
header {
  background-color: red;
}
div.logo {
  color: #3c3c3c;
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
  padding: 20px;
  color: #ffffff;
  background-color: #087e8b;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
ul.menu li:hover {
  transform: scale(1.02);
}
ul.menu li.start {
  background-color: #ff5a5f;
}
</style>
