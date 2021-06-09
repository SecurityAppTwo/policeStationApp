<template>
  <div>
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
          height="100"
          frameborder="0"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.map {
  margin-top: 150px;
  margin-bottom: 200px;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  color: #e3f2fd;
}
</style>
