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
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "add-todo",
        name: "addTodo",
        component: () => import("@/views/AddTodo.vue"),
      },
      {
        path: "update-todo/:id",
        name: "updateTodo",
        component: () => import("@/views/UpdateTodo.vue"),
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
