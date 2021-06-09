<template>
  <div id="app" style="height: 100vh;" class="appPage">
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
    <report-page />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ActionsPage from "./components/ActionsPage.vue";
import reportPage from "./components/reportPage.vue";
export default {
  name: "App",
  components: {
    reportPage
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
  /* <<<<<<< HEAD */
  /* ======= */
  /* background-image: url("https://i.pinimg.com/564x/2d/4e/f0/2d4ef0d384578ee83ccd92967f1db160.jpg");  */
  /* >>>>>>> 11281b5d60749b22fd8f6e97c436f96c6a2dbabb */
}

.appPage {
  background-color: #ccf2ff;
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
