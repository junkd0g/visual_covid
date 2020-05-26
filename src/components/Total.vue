<template>

  <div>

    <br><br>
    <div class="box">
      <div>
        <GeneralStat />
      </div>

      <div>
       <Today />
      </div>

      <div id="statiscalNumber">
        <b-table id="my-table" class="table table-fixed" striped :items="sdeaths" :fields="fields"/>
      </div>

      <div id="mobileStatiscalNumberID">
        <div v-for="item in sdeaths" :key="item">
          <div class="w3-container w3-content newsStand">
            <div class="w3-panel w3-white w3-card w3-display-container">
              <p class="lilika"><b> {{ item.country }} </b></p>
              Total covid-19 cases: <span class="gNumber"> {{ item.cases }} </span><br>
              Today's covid-19 cases: <span class="gNumber"> {{ item.todayCases }} </span><br>
              Total deaths associated with covid 19: <span class="gNumber"> {{ item.deaths }} </span><br>
              Today's deaths associated with covid 19: <span class="gNumber"> {{ item.todayDeaths }} </span><br>
              Recovered patients : <span class="gNumber"> {{ item.recovered }} </span><br>
              Pantients active with covid-19: <span class="gNumber"> {{ item.active }} </span><br>
              Pantients with critical condition : <span class="gNumber"> {{ item.critical }} </span><br>
              Cases per one million people: <span class="gNumber"> {{ item.casesPerOneMillion }} </span><br>
              Total covid-19 test: <span class="gNumber"> {{ item.tests }} </span><br>
              Tests per one million people: <span class="gNumber"> {{ item.testsPerOneMillion }} </span><br>
            </div>
          </div>
        </div>

      </div>

    
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import GeneralStat from './GeneralStat'
  import Today from './Today'
  import { isMobile } from 'mobile-device-detect';

  export default {
    components: {
      GeneralStat,
      Today
    },
    data() {
      return {
        window: {
            width: 0,
            height: 0,
            isMobile: true,
        },
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
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        this.window.isMobile = this.showMobile()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        var x = document.getElementById("statiscalNumber");
        var y = document.getElementById("mobileStatiscalNumberID");

        if (isMobile == true || this.window.width < 800) {
          x.style.display = "none";
          y.style.display = "block";
        }else{
          y.style.display = "none";
          x.style.display = "block";
        }
      }
    },
    mounted(){

        axios.defaults.baseURL = 'http://localhost:9080/api/'
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