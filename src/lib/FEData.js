export default class FEData {

    tableData() {
      return  [
        {
          key: 'country',
          sortable: true
        },
        {
          key: 'cases',
          sortable: true
        },
        {
          key: 'todayCases',
          sortable: true,
        },
        {
          key: 'deaths',
          sortable: true
        },
        {
          key: 'todayDeaths',
          sortable: true
        },
        {
          key: 'recovered',
          sortable: true,
        },
        {
          key: 'active',
          sortable: true
        },
        {
          key: 'critical',
          sortable: true
        },
        {
          key: 'casesPerOneMillion',
          sortable: true,
        },
        {
          key: 'tests',
          sortable: true
        },
        {
          key: 'testsPerOneMillion',
          sortable: true,
        }
      ];
    }

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
}