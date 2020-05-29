import Vue from "vue";
import VueRouter from "vue-router";

// Parent Components
import Auth from "./views/auth/Index.vue";
import NoAuth from "./views/no-auth/Index.vue"
// Children Components
import Dashboard from "./views/auth/Dashboard.vue";
import Login from "./views/no-auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "no-auth",
    component: NoAuth,
    meta: {
      next: "login",
    },
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
    ]
  },
  {
    path: "/app",
    name: "auth",
    component: Auth,
    meta: {
      next: "dashboard",
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
    ]
  },
];

const router = new VueRouter({ routes });

export default router;
