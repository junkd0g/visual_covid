<template>

  <div>
      
    <GeneralStat />
    
    <br>
    <b-button id="diagramButton" v-on:click="displayDiagrams" class="w-50 p-0 float-middle" variant="info" >
      See Diagrams
    </b-button>
    <br>
    <b-button id="statisticalButton" v-on:click="displayStatiscalNumber" class="w-50 p-0 float-middle" variant="info" style="display: none;">
      See more statistics
    </b-button>
    <br>
    <div class="float-middle w-50" id="statiscalNumber">
        <b-container fluid class="col-md-12 text-white" alt="Max-height 100%"><br>
            <div id="sortByDeath">
                <h5>
                    Sorted by deaths
                    <b-button v-on:click="casesDisplay" class="w-50 p-0" variant="info" >
                        Sort By Cases
                    </b-button>
                </h5>
                <br>
            <b-table id="my-table" class="table table-fixed" striped :items="sdeaths"></b-table>

            </div>

            <div id="sortByCases" style="display: none;">
                <h5>
                    Sorted by cases
                    <b-button v-on:click="deathsDisplay" class="w-50 p-0" variant="info" >
                        Sort By Deaths
                    </b-button>
                </h5>
                <br>

                <b-table id="my-table" class="table table-fixed" striped :items="scases"></b-table>
            </div>
        </b-container>
    </div>
    <div id="diagrams" class="float-middle" style="display: none;">
      <total-diagram 
        v-bind:countries="[ sdeaths[0].country, sdeaths[1].country, sdeaths[2].country, sdeaths[3].country, sdeaths[4].country, sdeaths[5].country]" 
    
        v-bind:deathsNumber="[ sdeaths[0].deaths, sdeaths[1].deaths, sdeaths[2].deaths, sdeaths[3].deaths, sdeaths[4].deaths, sdeaths[5].deaths]"
      v-bind:typeOfDiagram= "'Number of deaths'"

      >
      </total-diagram>
      <br>
      <total-diagram 
        v-bind:countries="[ scases[0].country, scases[1].country, scases[2].country, scases[3].country, scases[4].country, scases[5].country]" 
    
        v-bind:deathsNumber="[ scases[0].cases, scases[1].cases, scases[2].cases, scases[3].cases, scases[4].cases, scases[5].cases]"
        v-bind:typeOfDiagram= "'Number of Cases'"

      >
      </total-diagram>
      <br>
    </div>

     
    

  </div>

</template>

<script>
  import axios from 'axios'
  import TotalDiagram from './TotalDiagram'
  import GeneralStat from './GeneralStat'

  export default {
    components: {
      TotalDiagram,
      GeneralStat
    },
    methods: {
        casesDisplay(){
            document.getElementById("sortByDeath").style.display = "none";
            document.getElementById("sortByCases").style.display = "block";
        },
        deathsDisplay(){
            document.getElementById("sortByDeath").style.display = "block";
            document.getElementById("sortByCases").style.display = "none";
        },
        displayDiagrams(){
            document.getElementById("statiscalNumber").style.display = "none";
            document.getElementById("diagrams").style.display = "block";
            document.getElementById("diagramButton").style.display = "none";
            document.getElementById("statisticalButton").style.display = "block";
        },
        displayStatiscalNumber(){
            document.getElementById("statiscalNumber").style.display = "block";
            document.getElementById("diagrams").style.display = "none";
            document.getElementById("diagramButton").style.display = "block";
            document.getElementById("statisticalButton").style.display = "none";

        }
    },
    data() {
      return {
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
          alert(error);
        });

        axios.post(`sort`, {
            type: 'cases'
        })
        .then(response  => (this.scases = response.data.data))
        .catch(function (error) {   
          alert(error);
        });
    }
  }
</script>

<style scoped>

</style>