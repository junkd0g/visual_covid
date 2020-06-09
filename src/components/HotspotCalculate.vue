<template>
  <div>
    <div class="box">
    <div>
    <World 
        :key="worldData"
        v-bind:most="worldData.mostCases.data"
        v-bind:second="worldData.secondCases.data"
        v-bind:third="worldData.thirdCases.data"
        v-bind:country="worldData.mostCases.country"
        v-bind:countryTwo="worldData.secondCases.country"
        v-bind:countryThree="worldData.thirdCases.country"
        v-bind:title="'Countries with most cases for the last 10 days'"
        v-bind:desktopHeight=350
        v-bind:desktopWidth=500
    /></div>
    <div><World 
        :key="worldData"
        v-bind:most="worldData.mostDeaths.data"
        v-bind:second="worldData.secondDeaths.data"
        v-bind:third="worldData.thirdDeaths.data"
        v-bind:country="worldData.mostDeaths.country"
        v-bind:countryTwo="worldData.secondDeaths.country"
        v-bind:countryThree="worldData.thirdDeaths.country"
        v-bind:title="'Countries with most Deaths for the last 10 days'"
        v-bind:desktopHeight=350
        v-bind:desktopWidth=500
    /></div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import World from './Hotspot'

  export default {
    components: {
      World,
    },
    data(){
        return{
            worldData : {}
        }
    },
    methods: {
        requestWorld(){
          console.log(this.worldData)
          axios.get('http://localhost:9080/api/hotspot/10')
            .then(response  => (
              this.worldData = response.data))
          .catch(function (error) {   
            console.log(error)
          })
        }
    },
    mounted() {
        this.requestWorld()
    }
  };
</script>