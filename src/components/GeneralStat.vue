<template>

  <div>
    <div id="total">
        Total cases: {{ info.data.totalCases }} <br>
        Total deaths: {{ info.data.totalDeaths }} <br>
        Today's total cases: {{ info.data.todayTotalCases }} <br>
        Today's total deaths: {{ info.data.todayTotalDeaths }} <br>
        Today's percentage of total cases: {{ info.data.todayPerCentOfTotalCases }}% <br>
        Today's percentage of total deaths: {{ info.data.todayPerCentOfTotalDeaths }}% <br>
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
            axios.get('http://localhost:9080/total')
            .then(response => (this.info = response))
            .catch(function (error) {   
                console.log(error);
            });
        }

    }

</script>