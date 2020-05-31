<template>

  <div class="outer">
                             
    <div class="w3-container w3-content newsStand">
        <p class="modeText"><b>Statistics Today</b></p> 
        <div class="w3-panel w3-card w3-display-container mainPanel">
            <br>
            Total covid-19 cases: <span class="gNumber">{{ info.totalCases }} </span><br>
            Total deaths associated with covid-19: <span class="gNumber"> {{ info.totalDeaths }} </span><br>
            Today's covid-19 cases: <span class="gNumber">{{ info.todayTotalCases }} </span><br>
            Today's deaths associated with covid-19: <span class="gNumber">{{ info.todayTotalDeaths }} </span><br>
            Today's percentage of total cases: <span class="gNumber">{{ info.todayPerCentOfTotalCases }}% </span><br>
            Today's percentage of total deaths:  <span class="gNumber">{{ info.todayPerCentOfTotalDeaths }}% </span><br><br>
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
            .then(response => (this.info = response.data))
            .catch(function (error) {   
                console.log(error);
            });
        }

    }

</script>
