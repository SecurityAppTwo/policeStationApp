<template>
  <div>
    <div>
      <meta name="viewport" content="width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css"
      />
    </div>

    <div id="app">
      <div class="navbar">
        <div class="colum">
          <div class="home">
            <img src="./../assets/1.png" @click="showHome = !showHome" />
            <h4 v-if="showHome" style="margin-top: 8px; color: #ffff;"></h4>
          </div>

          <div class="check">
            <img
              src="./../assets/7.png"
              @click="moveToActions"
              @mouseover="showCheck = !showCheck"
              @mouseout="showCheck = !showCheck"
            />
            <h4 v-if="showCheck" style="margin-top: 8px; color: #ffff;">
              פעילויות
            </h4>
          </div>

          <div class="coin">
            <img
              src="./../assets/2.png"
              @click="moveToMap"
              @mouseover="showCoin = !showCoin"
              @mouseout="showCoin = !showCoin"
            />
            <h4 v-if="showCoin" style="margin-top: 8px; color: #ffff;">מפה</h4>
          </div>

          <div class="user">
            <img
              src="./../assets/6.png"
              @click="moveToReports"
              @mouseover="showUser = !showUser"
              @mouseout="showUser = !showUser"
            />
            <h4 v-if="showUser" style="margin-top: 8px; color: #ffff;">
              דיווחים
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#app",
  data() {
    return {
      showHome: false,
      showCheck: false,
      showCoin: false,
      showUser: false,
      effect: "lni-tada-effect"
    };
  },
  methods: {
    moveToMap() {
      this.$router.push("/MapPage");
      this.$router.go();
    },
    moveToActions() {
      this.$router.push("/ActionsPage");
      this.$router.go();
    },
    moveToReports() {
      this.$router.push("/ReportsPage");
      this.$router.go();
    }
  }
};
</script>

<style>
.navbar {
  width: 100%;
  height: 60px;
  background-color: orange;
  bottom: 100;
  box-shadow: 0.1px 0.1px 15px 0.1px #023e7d;
  display: flex;
}
#home {
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#check {
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#coin {
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#user {
  margin-left: 0;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
.colum {
  display: flex;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.home {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.check {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.coin {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.user {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.clicked {
  width: 100px;
  height: 34px;
  background-color: #feca57;
  border-radius: 10px;
  transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
}
</style>
