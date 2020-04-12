<template>

  <div>
      <mdb-container>
        <mdb-line-chart
            :data="lineChartData"
            :options="lineChartOptions"
            :width="600"
            :height="300"
        ></mdb-line-chart>
    </mdb-container>

  </div>

</template>

<script>
    import { mdbLineChart, mdbContainer } from "mdbvue";

    export default {
        name: "ChartPage",
        components: {
            mdbLineChart,
            mdbContainer
        }
    }

</script>

<script>
  import axios from 'axios'
  import { mdbLineChart, mdbContainer } from "mdbvue";

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
    data() {
      var displayLength;
      if (this.countryOneData.length > this.countryTwoData.length){
        displayLength = this.countryOneData.length;
      }else{
        displayLength =  this.countryTwoData.length
      }
      return {
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