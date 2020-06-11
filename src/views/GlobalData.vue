<template>
  <div>
    <navi/>

    <div id="diagrams" class="float-middle box">
      <!-- Bar diagram which contains the 5 countries with the most deaths globally from 22 of January */ -->
      <div>
        <div class="w3-container w3-content newsStandBig">
          <div class="w3-panel w3-card w3-display-container mainPanel">
            <total-diagram
              v-bind:countries="[ sdeaths[0].country, sdeaths[1].country, sdeaths[2].country, sdeaths[3].country, sdeaths[4].country, sdeaths[5].country]" 
              v-bind:deathsNumber="[ sdeaths[0].deaths, sdeaths[1].deaths, sdeaths[2].deaths, sdeaths[3].deaths, sdeaths[4].deaths, sdeaths[5].deaths]"
              v-bind:typeOfDiagram= "'Deaths associated with covid-19'"
            />
          </div>
        </div>
      </div>

      <!--/* Bar diagram which contains the 5 countries with the most confirm cases globally from 22 of January */-->
      <div>
        <div class="w3-container w3-content newsStandBig">
          <div class="w3-panel w3-card w3-display-container mainPanel">
            <total-diagram
              v-bind:countries="[ scases[0].country, scases[1].country, scases[2].country, scases[3].country, scases[4].country, scases[5].country]" 
              v-bind:deathsNumber="[ scases[0].cases, scases[1].cases, scases[2].cases, scases[3].cases, scases[4].cases, scases[5].cases]"
              v-bind:typeOfDiagram= "'Covid-19 total cases'"
            />
          </div>
        </div>
      </div>

      <!--/* Bar diagram which contains the 5 countries with the most active cases globally */-->
      <div>
        <div class="w3-container w3-content newsStandBig">
          <div class="w3-panel w3-card w3-display-container mainPanel">
            <total-diagram
              v-bind:countries="[ active[0].country, active[1].country, active[2].country, active[3].country, active[4].country, active[5].country]" 
              v-bind:deathsNumber="[ active[0].active, active[1].active, active[2].active, active[3].active, active[4].active, active[5].active]"
              v-bind:typeOfDiagram= "'Covid-19 active cases'"
            />
          </div>
        </div>
      </div>

      <!--/* Bar diagram which contains the 5 countries with the most recovered patients globally */-->
      <div>
        <div class="w3-container w3-content newsStandBig">
          <div class="w3-panel w3-card w3-display-container mainPanel">
            <total-diagram
              v-bind:countries="[ recovered[0].country, recovered[1].country, recovered[2].country, recovered[3].country, recovered[4].country, recovered[5].country]" 
              v-bind:deathsNumber="[ recovered[0].recovered, recovered[1].recovered, recovered[2].recovered, recovered[3].recovered, recovered[4].recovered, recovered[5].recovered]"
              v-bind:typeOfDiagram= "'Covid-19 recovered patients'"
            />
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import TotalDiagram from '@/components/TotalDiagram'
  import Navi from '@/components/Nav'

  export default {
    components: {
      TotalDiagram,
      Navi
    },
    methods: {
      
    },
    data() {
      return {
        sdeaths: [],
        scases: [],
        recovered : [],
        active : [],
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

        axios.post(`sort`, {
            type: 'cases'
        })
        .then(response  => (this.scases = response.data.data))
        .catch(function (error) {   
          console.log(error);
        });

        axios.post(`sort`, {
            type: 'recovered'
        })
        .then(response  => (this.recovered = response.data.data))
        .catch(function (error) {   
          console.log(error);
        });

        axios.post(`sort`, {
            type: 'active'
        })
        .then(response  => (this.active = response.data.data))
        .catch(function (error) {   
          console.log(error);
        });
    }
  }
</script>