import Vue from "vue";
import Router from "vue-router";
import { createWebHistory, createRouter } from "vue-router";
import ActionsPage from "@/components/ActionsPage";
import LoginPage from "@/components/LoginPage";
// import reportPage from "@/components/reportPage";
// import MapPage from "@components/MapPage";

Vue.use(Router);

const routes = [
  {
    path: "/ActionsPage",
    name: "ActionsPage",
    component: ActionsPage
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage
  }
  //   {
  //     path: "/reportPage",
  //     name: "reportPage",
  //     component: reportPage
  //   },
  //   {
  //     path: "/MapPage",
  //     name: "MapPage",
  //     component: MapPage
  //   }
];

// const router = createRouter({
//   history: createWebHistory,
//   routes
// });

export default router;
