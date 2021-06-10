<template>
  <div>
    <Navbar></Navbar>
    <div class="title">
      <h3>
        מעקב אחר פעילות
      </h3>
    </div>

    <div class="container">
      <div class="map">
        <iframe
          :src="`http://alpha-maps-git-tmzmap2.apps.openforce.openforce.biz/`"
          width="100%"
          height="140%"
          frameborder="0"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "MapPage",
  components: {
    Navbar
  }
};
</script>

<style>
.map {
  /* margin-top: 20px; */
  margin-bottom: 200px;
  margin-left: 100px;
  padding: 70px;
  width: 80vw;
  height: 45vh;
  display: flex;
  justify-content: center;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  color: white;
  font-weight: bold;
  font-size: 200%;
}
</style>
