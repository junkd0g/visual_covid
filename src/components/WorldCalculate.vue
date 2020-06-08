<template>
  <div>
    <World 
        :key="worldData"
        v-bind:cases="worldData.casesDaily"
        v-bind:deaths="worldData.deathsDaily"
        v-bind:recovered="worldData.recoveredDaily"
        v-bind:desktopHeight=500
        v-bind:desktopWidth=1000
    />
  </div>
</template>


<script>
  import axios from 'axios'
  import World from './World'

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
          axios.get('http://localhost:9080/api/world')
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