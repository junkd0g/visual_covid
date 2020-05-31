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
}