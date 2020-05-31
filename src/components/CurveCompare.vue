<template>

  <div>
    <div class="w3-container w3-content newsStandBig">
      <div class="w3-panel w3-card w3-display-containermainPanel mainPanel">
        <mdb-container class="totalChar">
          <mdb-line-chart
            :data="lineChartData"
            :options="lineChartOptions"
            :width="dimension.width"
            :height="dimension.height"
            :key="dimension"
          />
        </mdb-container>
      </div>
    </div>
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
    props: {
      countryOneData: Array,
      countryTwoData: Array,
      countryOneName: String,
      countryTwoName: String,
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
        lineChartData: fedata.lineChartData(this.countryOneData, this.countryTwoData, this.countryOneName, this.countryTwoName),
        lineChartOptions: fedata.lineChartOptionsData()
      }
    }
  }
</script>