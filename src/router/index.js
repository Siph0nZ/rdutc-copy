import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";

const routes = [
  {
    path: "/Home",
    component: home,
    name: "Home",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
