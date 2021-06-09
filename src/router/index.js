import ActionsPage from "@/components/ActionsPage";
import LoginPage from "@/components/LoginPage";
import MapPage from "@/components/MapPage";
import ReportsPage from "@/components/ReportsPage";

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
  },
  {
    path: "/ReportsPage",
    component: ReportsPage
  }
];
