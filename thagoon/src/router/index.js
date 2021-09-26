import { createRouter, createWebHistory } from 'vue-router';

// Pages
import StartMenu from '../views/StartMenu.vue';
import Game from '../views/Game.vue';
import Scores from '../views/Scores.vue';
import Settings from '../views/Settings.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
