<template>

  <div class="outer">                        
    <div class="w3-container w3-content newsStand">
    <p class="modeText"> <b> Statistics Today </b> </p> 
    <div class="w3-panel w3-card w3-display-container mainPanel">
      <br>
      Total covid-19 cases: <span class="gNumber">{{ globalData.totalCases }} </span><br>
      Total deaths associated with covid-19: <span class="gNumber"> {{ globalData.totalDeaths }} </span><br>
      Today's covid-19 cases: <span class="gNumber">{{ globalData.todayTotalCases }} </span><br>
      Today's deaths associated with covid-19: <span class="gNumber">{{ globalData.todayTotalDeaths }} </span><br>
      Today's percentage of total cases: <span class="gNumber">{{ globalData.todayPerCentOfTotalCases }}% </span><br>
      Today's percentage of total deaths:  <span class="gNumber">{{ globalData.todayPerCentOfTotalDeaths }}% </span><br><br>
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
