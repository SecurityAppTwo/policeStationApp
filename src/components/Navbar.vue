<template>
  <div id="app" style="background-color: #caf0f8; height: 100vh;">
    <div class="row">
      <div class="col">
        <button class="center">
          <a>
            לוח פעילויות
          </a>
          <router-link to="/ActionsPage"></router-link>
        </button>
        <i
          style="padding-top:3vh !important"
          class="fas fa-calendar-week fa-7x  "
        ></i>
      </div>
      <div class="col">
        <button class="center">
          <a>
            מפה
          </a>
          <router-link to="/MapPage"></router-link>
        </button>
        <i
          style="padding-top:3vh !important"
          class="fas fa-map-marked-alt fa-7x "
        ></i>
      </div>
      <div class="col">
        <button class="center">
          <a>
            דיווחים
          </a>
          <router-link to="/reportPage"></router-link>
        </button>
        <i
          style="padding-top:3vh !important"
          class="fas fa-broadcast-tower fa-7x  "
        ></i>
      </div>
    </div>
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "@/components/LoginPage.vue";

export default {
  name: "App",
  components: {
    LoginPage
  },
  data() {
    return {
      buttons: [
        { name: "לוח פעילויות", icon: "fas fa-calendar-week fa-7x" },
        { name: "מפה", icon: "fas fa-map-marked-alt fa-7x" },
        { name: "דיווחים", icon: "fas fa-broadcast-tower fa-7x" }
      ]
    };
  }
};
</script>

<style>
#app {
}

a {
  font-size: 3vw;
}

i {
  width: 80px !important;
  height: 80px !important;
  size: 40px;
}

.center {
  display: inline;
  text-align: center;
  justify-content: center;
  /* background-color:cadetblue; */
}

.col {
  flex-flow: column nowrap;
  justify-content: space-between;
  display: flex;
}

.row {
  width: 40vw;
  display: flex;
  /* text-align: center; */
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-left: 26vw;
}
</style>
