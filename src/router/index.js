import ActionsPage from "@/components/ActionsPage";
import LoginPage from "@/components/LoginPage";
import MapPage from "@/components/MapPage";

export default [
  {
    path: "/ActionsPage",
    component: ActionsPage
  },
  {
    path: "/",
    component: LoginPage
  },
  {
    path: "/MapPage",
    component: MapPage
  }
];

// export default router;
