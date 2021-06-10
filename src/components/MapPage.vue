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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.map {
  width: 70vw;
  height: 40vh;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 1vh;
  color: white;
  font-weight: bold;
  font-size: 4vw;
  font-weight: 3vw;
}
</style>
