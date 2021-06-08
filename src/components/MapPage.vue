<template>
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
</template>

<script>
export default {};
</script>

<style>
.map {
  margin-top: 300px;
  margin-bottom: 200px;
  width: 50vw;
  height: 30vh;
  display: flex;
  justify-content: center;
}
</style>
