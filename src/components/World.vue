<template>
  <div>
  <p class="modeText"><b> World daily updates  </b></p>
    <mdb-container>
        <mdb-line-chart
          :data="lineChartData"
          :options="lineChartOptions"
          :width="1000"
          :height="500"
        />
    </mdb-container>
  </div>
</template>


<script>
  import { mdbLineChart, mdbContainer } from "mdbvue";
  import axios from 'axios'
  import FEData from '../lib/FEData.js';
  var fedata= new FEData();

  export default {
    name: "ChartPage",
    components: {
      mdbLineChart,
      mdbContainer
    },
    methods: {
        requestWorld(){
          axios.get('http://localhost:9080/api/world')
            .then(response  => (
              this.worldData = response.data))
          .catch(function (error) {   
            console.log(error)
          })
        }
    },
    props: {
        cases: Array,
        deaths: Array,
        recovered: Array,
    },
    mounted() {
        this.requestWorld()
    },
    data() {
      return {
        worldData : {},
        lineChartData: {
          labels: Array.from(Array(this.cases.length).keys()),
          datasets: fedata.worldDataSets(this.cases, this.deaths, this.recovered),
        },
        lineChartOptions: fedata.worldLineChartOptions()
      };
    }
  };
</script>