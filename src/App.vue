<template>
  <div id="app" style="background-color: #75899f">
    <div class = "row">
      <div class = "col" v-for="(button, key) in buttons" :key = "key">
        <button class = "center">
          <a>
          {{ button.name }}
          </a> 
        </button>
          <i class="fas fa-calendar-week fa-7x  "  ></i>
      </div>
    </div>
    <actions-page/>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import ActionsPage from './components/ActionsPage.vue'
export default {
  name: 'App',
  components: {
    ActionsPage
  },
  data () {
    return {
      buttons : [{name : "לוח פעילויות", omri : "fas fa-calendar-week fa-7x"},{name : "מפה", omri : "fas fa-map-marked-alt fa-7x"}, {name : "דיווחים", omri : "fas fa-broadcast-tower fa-7x"} ]
    }
  }
}
</script>

<style>
#app {
}

a{
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
  background-color:cadetblue;
}

.col{
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
