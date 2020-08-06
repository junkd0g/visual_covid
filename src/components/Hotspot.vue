<template>
  <div>
  <p class="modeText"><b> {{ title }}  </b></p>
  <p class="modeText">Stats for the last 10 days</p>
    <mdb-container>
        <mdb-bar-chart
          :data="lineChartData"
          :options="lineChartOptions"
          :width="dimension.width"
          :height="dimension.height"
        />
    </mdb-container>
  </div>
</template>


<script>
  import { mdbBarChart, mdbContainer } from "mdbvue";
  import { isMobile } from 'mobile-device-detect';
  import FEData from '../lib/FEData.js';
  var fedata= new FEData();

  export default {
    name: "ChartPage",
    components: {
      mdbBarChart,
      mdbContainer
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        if (isMobile == true) {
          this.dimension.height = 280
          this.dimension.width = 310
        }else{
          this.dimension.height = 400
          this.dimension.width = 600
        }
      }
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
        dimension :{
          height: 500,
          width: 1100,
        },
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