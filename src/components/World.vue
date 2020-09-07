<template>
    <div>

    <div> 
      <span class="font6"> World daily updates: </span><br>
      <span class="font5"> Stats for the last 20 days </span>
    </div>

    <mdb-container>
        <mdb-bar-chart
          :data="lineChartData"
          :options="lineChartOptions"
        />
    </mdb-container>
  </div>
</template>

<script>
  import { mdbBarChart, mdbContainer } from "mdbvue";
  import FEData from '../lib/FEData.js';
  var fedata= new FEData();

  export default {
    name: "ChartPage",
    components: {
      mdbBarChart,
      mdbContainer
    },
    props: {
      cases: Array,
      deaths: Array,
      recovered: Array,
    },
    data() {
      return {
        lineChartData: {
          labels: Array.from(Array(this.cases.length).keys()),
          datasets: fedata.worldDataSets(this.cases, this.deaths, this.recovered, "cases", "deaths", "recovered"),
        },
        
        lineChartOptions: fedata.worldLineChartOptions()
      };
    }
  };
</script>