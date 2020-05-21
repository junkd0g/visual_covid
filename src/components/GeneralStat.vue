<template>

  <div class="outer">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-metro.css">
                             
    <div class="w3-container w3-content newsStand">
        <p class="w3-opacity"><b>Statistics Today</b></p> 
        <div class="w3-panel w3-white w3-card w3-display-container">
            <br>
            Total covid-19 cases: <span class="gNumber">{{ info.data.totalCases }} </span><br>
            Total deaths associated with covid-19: <span class="gNumber"> {{ info.data.totalDeaths }} </span><br>
            Today's covid-19 cases: <span class="gNumber">{{ info.data.todayTotalCases }} </span><br>
            Today's deaths associated with covid-19: <span class="gNumber">{{ info.data.todayTotalDeaths }} </span><br>
            Today's percentage of total cases: <span class="gNumber">{{ info.data.todayPerCentOfTotalCases }}% </span><br>
            Today's percentage of total deaths:  <span class="gNumber">{{ info.data.todayPerCentOfTotalDeaths }}% </span><br><br>
            <span></span>
        </div>
    </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                info: [],
            }
        },
        mounted(){
            axios.get('http://localhost:9080/api/total')
            .then(response => (this.info = response))
            .catch(function (error) {   
                console.log(error);
            });
        }

    }

</script>

<style scoped>
.gNumber {
  color: #42b983;
  font-weight: bold;
}
.newsStand{
    width: 500px;
}
</style>