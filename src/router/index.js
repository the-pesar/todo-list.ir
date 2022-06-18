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
        redirect: "today",
        // component: () => import("@/views/Home.vue"),
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
        path: "today",
        name: "today",
        component: () => import("@/views/Todos/Today.vue"),
      },
      {
        path: "weekly",
        name: "weekly",
        component: () => import("@/views/Todos/Weekly.vue"),
      },
      {
        path: "monthly",
        name: "monthly",
        component: () => import("@/views/Todos/Monthly.vue"),
      },
      {
        path: "six-monthly",
        name: "six-monthly",
        component: () => import("@/views/Todos/SixMonthly.vue"),
      },
      {
        path: "yearly",
        name: "yearly",
        component: () => import("@/views/Todos/Yearly.vue"),
      },
      {
        path: "vision",
        name: "vision",
        component: () => import("@/views/Todos/Vision.vue"),
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
