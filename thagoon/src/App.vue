<template>
  <w-app>
    <Header />
    <router-view v-slot="{ Component }">
      <transition
        :enter-active-class="this.Enter"
        :leave-active-class="this.Leave"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </w-app>
</template>

<script>
import { ref } from 'vue';

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
    const Enter = ref('');
    const Leave = ref('');
    return {
      Enter,
      Leave,
    };
  },
  watch: {
    $route(to, from) {
      console.log('watch $route: ', to, from);
      this.Enter = to.meta.enterClass;
      this.Leave = from.meta.leaveClass;
      console.log(this.Enter, this.Leave);
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

.page {
  position: fixed;
  width: 100%;
  transition: 1s;
  background-color: #f5f5f5;
  box-shadow: 0 0 1px rgb(0 0 0 / 10%), 1px 1px 4px rgb(0 0 0 / 15%);
}

.test-transition {
  position: fixed;
  width: 100%;
  z-index: -9;
}

.page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* BUTTON */
.btn {
  color: #ffffff;
  background: #ff5a5f;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 0 0 1px rgb(0 0 0 / 10%), 1px 1px 4px rgb(0 0 0 / 15%);
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  transform: scale(1.05);
}

/* INPUT */
.w-input--no-padding .w-input__input {
  font-family: 'Lato';
  color: black;
  font-weight: 600;
}

/* IMAGE */
.w-image {
  background-position: center;
}
</style>
