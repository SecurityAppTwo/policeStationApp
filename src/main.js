import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import router from "./router";
// import { createApp } from "vue";

// createApp(App)
//   .use(router)
//   .mount("#app");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
