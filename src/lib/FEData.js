export default class FEData {

  lineChartOptionsData(){
    return {
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

  horizontalBarChartOptionsData() {
    return {
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
    }
  }

  horizontalBarChartData(countries, typeOfDiagram, deathsNumber){
    return {
      labels: countries,
      datasets: [
        {
          label: typeOfDiagram,
          data: deathsNumber,
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
    }
  }

  lineChartData(countryOneData,countryTwoData,countryOneName,countryTwoName){
    var displayLength;
      if (countryOneData.length > countryTwoData.length){
        displayLength = countryOneData.length;
      }else{
        displayLength = countryTwoData.length
     }
    return {
      labels: Array.from(Array(displayLength).keys()),
      datasets: [{
        label: countryOneName,
        backgroundColor: "rgba(204, 0, 0, 0.1)",
        borderColor: "rgba(204, 0, 0, 1.0)",
        borderWidth: 0.7,
        data : countryOneData
      },
      {
        label: countryTwoName,
        backgroundColor: "rgba(151,187,205,0.2)",
        borderColor: "rgba(151,187,205,1)",
        borderWidth: 0.8,
        data : countryTwoData
      }
     ]
    }
  }

  worldDataSets(cases, deaths, recovered, labelOne, labelTwo, labelThree){
    return[
      {
        
        label: labelOne,
        backgroundColor: "rgba(0, 102, 168, 0.1)",
        borderColor: "rgba(0, 102, 255, 1)",
        borderWidth: 3.0,
        fill :false,
        data: cases
      },
      {
        label: labelTwo,
        backgroundColor: "rgba(157, 218, 225,1)",
        borderColor: "rgba(157, 218, 225,1)",
        borderWidth: 2.0,
        fill :false,
        data: deaths
      },
      {
        label: labelThree,
        backgroundColor: "rgba(252, 93, 45, 1)",
        borderColor: "rgba(252, 93, 45, 1)",
        fill :false,

        borderWidth: 3.0,
        data: recovered
      }
    ]
  }

  worldLineChartOptions(){
    return {
      legend: {
        display: false
    },
  scales: {
   xAxes: [{
      display: false,
      gridLines: {
         display: false
      }
   }],
   yAxes: [{
     display: false,
      gridLines: {
         display: false
      }
   }]
},
responsive: true,
    }
  }

}