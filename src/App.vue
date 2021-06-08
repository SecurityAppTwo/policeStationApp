<template>
  <div id="app" style="background-color: #caf0f8; height: 100vh;">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";
// import ActionsPage from "./components/ActionsPage.vue";

export default {
  name: "App",
  components: {
    LoginPage
    // ActionsPage
  },
  data() {
    return {};
  }
};
</script>

<style></style>
