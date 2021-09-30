<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
// IMPORT COMPONENTS
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  setup() {
    // Get app settings
    // if none than push default
  },
  watch: {
    $route(to, from) {
      console.log('watch $route: ', to, from);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Lato:ital,wght@0,100;1,100&display=swap');

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  position: fixed;
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5f5f5;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Cormorant Garamond', serif;
}

div,
span,
p {
  font-family: 'Lato', sans-serif;
}
</style>
