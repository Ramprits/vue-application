import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
