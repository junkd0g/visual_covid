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
  import axios from 'axios'
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
        requestWorld(){
          axios.get('http://localhost:9080/api/world')
            .then(response  => (
              this.worldData = response.data))
          .catch(function (error) {   
            console.log(error)
          })
        },
        handleResize() {
            if (isMobile == true) {
                this.dimension.height = 280
                this.dimension.width = 310
            }else{
                this.dimension.height = 500
                this.dimension.width = 1000
            }
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
        dimension :{
          height: 500,
          width: 1100,
        },
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