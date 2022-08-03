import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "layout",
    component: () => import("@/components/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        redirect: { name: "todos" },
      },
      {
        path: "todos",
        name: "todos",
        component: () => import("@/views/Todos.vue"),
      },
      {
        path: "notes",
        name: "notes",
        component: () => import("@/views/Notes.vue"),
      },
      {
        path: "vision",
        name: "vision",
        component: () => import("@/views/Vision.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/Settings.vue"),
      },
      {
        path: ":pathMatch(.*)",
        name: "404",
        component: () => import("@/views/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
