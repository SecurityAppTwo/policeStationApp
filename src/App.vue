Skip to content Search or jump to… Pull requests Issues Marketplace Explore
@mayarub SecurityAppTwo / policeStationApp 0 0 0 Code Issues Pull requests
Actions Projects Wiki Security 1 Insights Settings policeStationApp/src/App.vue
hackathon IDF changed styles and db connection Latest commit 11281b5 8 hours ago
History 0 contributors We found potential security vulnerabilities in your
dependencies. You can see this message because you have been granted access to
Dependabot alerts for this repository. 99 lines (91 sloc) 1.96 KB

<template>
  <div id="app" style="background-color: #caf0f8; height: 100vh;">
    <div class="row">
      <div class="col">
        <button class="center">
          <a>
            לוח פעילויות
          </a>
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
        </button>
        <i
          style="padding-top:3vh !important"
          class="fas fa-broadcast-tower fa-7x  "
        ></i>
      </div>
    </div>
    <map-page />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ActionsPage from "./components/ActionsPage.vue";
import MapPage from "./components/MapPage.vue";
export default {
  name: "App",
  components: {
    MapPage
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
  /* background-image: url("https://i.pinimg.com/564x/2d/4e/f0/2d4ef0d384578ee83ccd92967f1db160.jpg");  */
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
