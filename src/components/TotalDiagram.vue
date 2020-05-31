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
          horizontalBarChartData: {
              labels: this.countries,
              datasets: [
                {
                  label: this.typeOfDiagram,
                  data: this.deathsNumber,
                  backgroundColor: [
                    "#cc0000",
                    "#6200ee",
                    "#3700b3",
                    "#045757",
                    "#f6c90e",
                    "#0a91ab"
                ],
                borderColor: [
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                ],
                borderWidth: 1
              }
            ]
          },
          horizontalBarChartOptions: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  barPercentage: 1,
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ]
            }
          },
        }
    },
  }
</script>