<template>

     <div>
      <span class="font0">Total cases:</span> <br><span class="font1">{{ globalData.totalCases.toLocaleString() }} </span><br><br>
      <span class="font0">Total deaths:</span><br> <span class="font1"> {{ globalData.totalDeaths.toLocaleString() }} </span><br><br>
      <div class="row">
        <div class="col-3">
          <span class="font0"> Today's cases: </span><br><span class="font3 blue">{{ globalData.todayTotalCases.toLocaleString() }} </span>
        </div>
        <div class="col-9">
          <span class="font0 ">Today's deaths: </span><br><span class="font3 blue">{{ globalData.todayTotalDeaths.toLocaleString() }} </span>
        </div>
      </div>
        
    </div>


</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        globalData: [],
      }
    },
    mounted(){
      axios.get('http://54.246.200.221/api/total')
        .then(response => (this.globalData = response.data))
        .catch(function (error) {   
           console.log(error);
        });
      }
    }
</script>
