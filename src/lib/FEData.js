export default class FEData {

  lineChartOptionsData(){
    return {
      legend: {
        display: true
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
      responsive: true
    }
  }

  horizontalBarChartOptionsData() {
    return {
      legend: {
        display: true
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
      responsive: true
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
            "#0066FF",
            "#F5BEAE",
            "#15A7E5",
            "#FFF500",
            "#9FBFF0",
            "#C1C8D8"
        ],
        borderColor: [
          "#0066FF",
          "#F5BEAE",
          "#15A7E5",
          "#FFF500",
          "#9FBFF0",
          "#C1C8D8"
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
        backgroundColor: "rgba(0,102,255,1)",
        borderColor: "rgba(0,102,255,1)",
        borderWidth: 0.7,
        data : countryOneData
      },
      {
        label: countryTwoName,
        backgroundColor: "rgba(245,190,174,1)",
        borderColor: "rgba(245,190,174,1)",
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
        backgroundColor: "rgba(0,102,255,1)",
        borderColor: "rgba(0,102,255,1)",
        borderWidth: 3.0,
        fill :false,
        data: cases
      },
      {
        label: labelTwo,
        backgroundColor: "rgba(193,200,216,1)",
        borderColor: "rgba(193,200,216,1)",
        borderWidth: 2.0,
        fill :false,
        data: deaths
      },
      {
        label: labelThree,
        backgroundColor: "rgba(245,190,174,1)",
        borderColor: "rgba(245,190,174,1)",
        fill :false,

        borderWidth: 3.0,
        data: recovered
      }
    ]
  }

  worldLineChartOptions(){
    return {
      legend: {
        display: true
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