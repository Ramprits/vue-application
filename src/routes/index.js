import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(window.process.env.BASE_URL),
  routes
});

export default router;
