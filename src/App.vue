<template>
  <div id="app" style="height: 100vh;">
    <!-- <div class="row">
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
    </div> -->
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
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
  background-color: black !important;
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
