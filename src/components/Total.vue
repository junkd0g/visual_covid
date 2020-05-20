<template>

  <div>
    
    <div class="gs">
      <GeneralStat />
    </div>

    <div class="gsTable">
      <div id="statiscalNumber">
        <b-table id="my-table" class="table table-fixed" striped :items="sdeaths" :fields="fields"/>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import GeneralStat from './GeneralStat'

  export default {
    components: {
      GeneralStat
    },
    data() {
      return {
        fields: [
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
        ],
        sdeaths: [],
        scases: [],
      }
    },
    mounted(){

        axios.defaults.baseURL = 'http://localhost:9080/'
        axios.post(`sort`, {
            type: 'deaths'
        })
        .then(response  => (
            this.sdeaths = response.data.data
          )
        )
        .catch(function (error) {   
          console.log(error);
        });
    }
  }
</script>

<style scoped>
.gs{
  width: 100%;
  height: 200px;
  left: 30%;
  z-index: 15;
}
.gsTable{
  position: absolute;
  z-index: 15;
  top: 40%;
  width:100%;
}
</style>