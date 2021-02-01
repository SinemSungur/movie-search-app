import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favorite from '../views/Favorite.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/favorite",
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
