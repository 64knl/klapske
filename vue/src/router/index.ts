import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PayView from "../views/PayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/pay/:details*",
      name: "pay",
      component: PayView,
    },
    {
      path: "/vraag/",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
