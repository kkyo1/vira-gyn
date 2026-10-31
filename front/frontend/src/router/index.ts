import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IdentifyView from '../views/IdentifyView.vue';
import PointsView from '../views/PointsView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/identify', name: 'identify', component: IdentifyView },
  { path: '/points', name: 'points', component: PointsView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;