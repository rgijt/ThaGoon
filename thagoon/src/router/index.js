import { createRouter, createWebHistory } from 'vue-router';

// Pages
import StartMenu from '../views/StartMenu.vue';
import Game from '../views/Game.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
