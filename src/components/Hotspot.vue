<template>
  <div>
  <p class="modeText"><b> {{ title }}  </b></p>
  <p class="modeText">Stats for the last 10 days</p>
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
        most: Array,
        second: Array,
        third: Array,
        title: String,
        country: String,
        countryTwo: String,
        countryThree: String,
    },
    mounted() {
        this.requestWorld()
    },
    data() {
      return {
        worldData : {},
        lineChartData: {
          labels: Array.from(Array(this.most.length).keys()),
          datasets: fedata.worldDataSets(this.most, this.second, this.third, this.country, this.countryTwo, this.countryThree),
        },
        lineChartOptions: fedata.worldLineChartOptions()
      };
    }
  };
</script>