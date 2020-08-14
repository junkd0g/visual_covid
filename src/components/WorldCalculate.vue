<template>
  <div>
    <World 
        :key="worldDowbownText"
        v-bind:cases="worldData.casesDaily.slice(worldData.casesDaily.length - worldDowbownText, worldData.casesDaily.length)"
        v-bind:deaths="worldData.deathsDaily.slice(worldData.casesDaily.length - worldDowbownText, worldData.casesDaily.length)"
        v-bind:recovered="worldData.recoveredDaily.slice(worldData.casesDaily.length - worldDowbownText, worldData.casesDaily.length)"
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
            worldData : {},
            worldDowbownText : 30,
            worldDowbownData : ['All', 130, 110, 100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 8, 5, 3],
        }
    },
    methods: {
        requestWorld(){
          console.log(this.worldData)
          axios.get('http://54.246.200.221/api/world')
            .then(response  => (
              this.worldData = response.data))
          .catch(function (error) {   
            console.log(error)
          })
        },
        updateOne(item){
          this.worldDowbownText = item
        }
    },
    mounted() {
        this.requestWorld()
    }
  };
</script>