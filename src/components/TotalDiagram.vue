<template>

  <div>
    <mdb-container class="totalChar" >
      <mdb-horizontal-bar-chart
        :data="horizontalBarChartData"
        :options="horizontalBarChartOptions"
        :width="dimension.width"
        :height="dimension.height"
      />
    </mdb-container>
  </div>

</template>

<script>
  import { mdbHorizontalBarChart, mdbContainer } from "mdbvue";
  import { isMobile } from 'mobile-device-detect';
  import FEData from '../lib/FEData.js';

  var fedata= new FEData();

  export default {
    name: "ChartPage",
    components: {
      mdbHorizontalBarChart,
      mdbContainer
    },
    props: {
      countries: Array,
      deathsNumber: Array,
      typeOfDiagram: String
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
          this.dimension.height = 300
          this.dimension.width = 600
        }
      }
    },
    data() {
      return {
        dimension :{
          height: 300,
          width: 600,
        },
        horizontalBarChartData: fedata. horizontalBarChartData(this.countries, this.typeOfDiagram, this.deathsNumber),
        horizontalBarChartOptions: fedata.horizontalBarChartOptionsData(),
      }
    },
  }
</script>