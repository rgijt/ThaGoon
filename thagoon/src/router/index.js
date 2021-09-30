import { createRouter, createWebHistory } from 'vue-router';

// VIEWS
import StartMenu from '../views/StartMenu.vue';
import Game from '../views/Game.vue';
import Scores from '../views/Scores.vue';
import Settings from '../views/Settings.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'StartMenu',
    component: StartMenu,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/scores',
    name: 'Scores',
    component: Scores,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
