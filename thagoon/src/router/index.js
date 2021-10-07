import { createRouter, createWebHistory } from 'vue-router';

// VIEWS
import StartMenu from '../views/StartMenu.vue';
import Game from '../views/Game.vue';
import Scores from '../views/Scores.vue';
import Settings from '../views/Settings.vue';
import Login from '../views/Login.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'StartMenu',
    component: StartMenu,
    meta: {
      enterClass: 'test-transition',
      leaveClass: 'test-transition',
    },
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    meta: {
      enterClass: 'animate__animated animate__slideInRight',
      leaveClass: 'animate__animated animate__slideOutRight',
    },
  },
  {
    path: '/scores',
    name: 'Scores',
    component: Scores,
    meta: {
      enterClass: 'animate__animated animate__slideInUp',
      leaveClass: 'animate__animated animate__slideOutDown',
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      enterClass: 'animate__animated animate__slideInDown',
      leaveClass: 'animate__animated animate__slideOutUp',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
