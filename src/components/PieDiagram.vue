<template>
  <div> 
    <span class="modeText"> {{type}} across the globe </span>
    <mdb-container>
      <mdb-pie-chart
        datalabels
        :data="pieChartData"
        :options="pieChartOptions"
        :width="600"
        :height="300"
      />
  </mdb-container>
  </div>
</template>


<script>
  import { mdbPieChart, mdbContainer } from "mdbvue";
  export default {
    name: "ChartPage",
    components: {
      mdbPieChart,
      mdbContainer
    },
    props: {
      cData: Array,
      type: String
    },
    methods : {
        getData(){
            if (this.type == "Deaths"){
                return  [this.cData[0].deaths, this.cData[1].deaths, this.cData[2].deaths, this.cData[3].deaths, this.cData[4].deaths, this.cData[5].deaths]
            }
            if (this.type == "Cases"){
                return  [this.cData[0].cases, this.cData[1].cases, this.cData[2].cases, this.cData[3].cases, this.cData[4].cases, this.cData[5].cases]
            }
             if (this.type == "Tests"){
                return  [this.cData[0].tests, this.cData[1].tests, this.cData[2].tests, this.cData[3].tests, this.cData[4].tests, this.cData[5].tests]
            }
        }
    },
    data() {
      return {
        pieChartData: {
          labels: [this.cData[0].continent, this.cData[1].continent, this.cData[2].continent, this.cData[3].continent, this.cData[4].continent, this.cData[5].continent],
          datasets: [
            {
              data: this.getData(),
              backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360"
              ],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774"
              ]
            }
          ]
        },
        pieChartOptions: {
          responsive: false,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: "white",
              align: "center",
              font: {
                size: 16
              },
              formatter: value => {
                const [dataset] = this.pieChartData.datasets;
                const setValue = dataset.data.reduce((a, b) => a + b);

                return `${Math.round((value / setValue) * 100)}%`;
              }
            }
          }
        }
      };
    }
  };
</script>