<template>

  <div>
    <div>
        <div class="w3-container w3-content newsStandBig">
          <div class="w3-panel w3-white w3-card w3-display-container">
            <mdb-container>
              <mdb-line-chart
                :data="lineChartData"
                :options="lineChartOptions"
                :width="dimension.width"
                :height="dimension.height"
                :key="dimension"
              ></mdb-line-chart>
            </mdb-container>
          </div>
        </div>
    </div>

  </div>

</template>

<script>
  import { mdbLineChart, mdbContainer } from "mdbvue";
  import { isMobile } from 'mobile-device-detect';

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
      var displayLength;
      if (this.countryOneData.length > this.countryTwoData.length){
        displayLength = this.countryOneData.length;
      }else{
        displayLength =  this.countryTwoData.length
      }
      return {
        dimension :{
          height: 300,
          width: 600,
        },
        lineChartData: {
          labels: Array.from(Array(displayLength).keys()),
          datasets: [{
            label: this.countryOneName,
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data : this.countryOneData
          },
          {
            label: this.countryTwoName,
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data : this.countryTwoData
          }
         ]
        },
        lineChartOptions: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
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
        }
      }
    },
  }
</script>