<template>
  <div>
    <p class="modeText"><b> World daily updates  </b></p>
    <mdb-container>
        <mdb-line-chart
          :data="lineChartData"
          :options="lineChartOptions"
          :width="dimension.width"
          :height="dimension.height"
        />
    </mdb-container>
  </div>
</template>

<script>
  import { mdbLineChart, mdbContainer } from "mdbvue";
  import { isMobile } from 'mobile-device-detect';
  import FEData from '../lib/FEData.js';
  var fedata= new FEData();

  export default {
    name: "ChartPage",
    components: {
      mdbLineChart,
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
          this.dimension.height = this.desktopHeight
          this.dimension.width = this.desktopWidth
        }
      }
    },
    props: {
      cases: Array,
      deaths: Array,
      recovered: Array,
      desktopHeight: Number,
      desktopWidth: Number
    },
    data() {
      return {
        dimension :{
          height: this.desktopHeight,
          width: this.desktopWidth,
        },
        lineChartData: {
          labels: Array.from(Array(this.cases.length).keys()),
          datasets: fedata.worldDataSets(this.cases, this.deaths, this.recovered, "cases", "deaths", "recovered"),
        },
        lineChartOptions: fedata.worldLineChartOptions()
      };
    }
  };
</script>