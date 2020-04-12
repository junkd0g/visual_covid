<template>

  <div>

    <mdb-container>
      <mdb-horizontal-bar-chart
      :data="horizontalBarChartData"
      :options="horizontalBarChartOptions"
      :width="600"
      :height="300"
      >
      </mdb-horizontal-bar-chart>
    </mdb-container>

  </div>

</template>

<script>
  import { mdbHorizontalBarChart, mdbContainer } from "mdbvue";

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
    data() {
        return {
            horizontalBarChartData: {
              labels: this.countries,
              datasets: [
                {
                  label: this.typeOfDiagram,
                  data: this.deathsNumber,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgba(255,99,132,1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
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