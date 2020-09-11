<template>
  <div>
    <navi/>

    <div id="diagrams" class="float-middle box">

      <div>
        <div class="w3-container w3-content newsStandBig2">
            <pie-diagram
              v-bind:cData="continentData" 
              v-bind:type="'Deaths'" 
            />
        </div>
      </div>
      <br>
      <div>
        <div class="w3-container w3-content newsStandBig2">
            <pie-diagram
              v-bind:cData="continentData" 
              v-bind:type="'Cases'" 
            />
        </div>
      </div>
      <br>
       <div>
        <div class="w3-container w3-content newsStandBig2">
            <pie-diagram
              v-bind:cData="continentData" 
              v-bind:type="'Tests'" 
            />
        </div>
      </div>

      <br>
      <!-- Bar diagram which contains the 5 countries with the most deaths globally from 22 of January */ -->
      <div>
        <div class="w3-container w3-content newsStandBig2">
            <total-diagram
              v-bind:countries="[ sdeaths[0].country, sdeaths[1].country, sdeaths[2].country, sdeaths[3].country, sdeaths[4].country, sdeaths[5].country]" 
              v-bind:deathsNumber="[ sdeaths[0].deaths, sdeaths[1].deaths, sdeaths[2].deaths, sdeaths[3].deaths, sdeaths[4].deaths, sdeaths[5].deaths]"
              v-bind:typeOfDiagram= "'Deaths associated with covid-19'"
            />
        </div>
      </div>
      <br>
      <!--/* Bar diagram which contains the 5 countries with the most confirm cases globally from 22 of January */-->
      <div>
        <div class="w3-container w3-content newsStandBig2">
            <total-diagram
              v-bind:countries="[ scases[0].country, scases[1].country, scases[2].country, scases[3].country, scases[4].country, scases[5].country]" 
              v-bind:deathsNumber="[ scases[0].cases, scases[1].cases, scases[2].cases, scases[3].cases, scases[4].cases, scases[5].cases]"
              v-bind:typeOfDiagram= "'Covid-19 total cases'"
            />
        </div>
      </div>
      <br>
      <!--/* Bar diagram which contains the 5 countries with the most active cases globally */-->
      <div>
        <div class="w3-container w3-content newsStandBig2">
            <total-diagram
              v-bind:countries="[ active[0].country, active[1].country, active[2].country, active[3].country, active[4].country, active[5].country]" 
              v-bind:deathsNumber="[ active[0].active, active[1].active, active[2].active, active[3].active, active[4].active, active[5].active]"
              v-bind:typeOfDiagram= "'Covid-19 active cases'"
            />
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import TotalDiagram from '@/components/TotalDiagram'
  import PieDiagram from '@/components/PieDiagram'
  import Navi from '@/components/Nav'

  export default {
    components: {
      TotalDiagram,
      PieDiagram,
      Navi
    },
    data() {
      return {
        sdeaths: [],
        scases: [],
        active : [],
        continentData : []
      }
    },
    methods:{
      requestContinentData(){
        axios.get('http://54.246.200.221/api/continent')
          .then(response  => (
            this.continentData = response.data))
          .catch(function (error) {   
            console.log(error)
        });
      }
    },
    mounted(){
        this.requestContinentData()
        axios.defaults.baseURL = 'http://54.246.200.221/api/'
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
            type: 'active'
        })
        .then(response  => (this.active = response.data.data))
        .catch(function (error) {   
          console.log(error);
        });
    }
  }
</script>