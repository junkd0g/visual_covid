<template>

  <div>
  
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-metro.css">
    <navi/>
    <br>
    <div>
      <b-dropdown id="dropdown-1" :text="v1" class="m-md-2">
        <b-dropdown-item  v-for="item in info" :key="item.position"  v-on:click="updateOne(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>
    </div>


    <div class="box">
      <div>
        <div class="w3-container w3-content newsStand">
          <div class="w3-panel w3-white w3-card w3-display-container">
            <p class="lilika"><b> {{ info.country }} </b></p>
            Total covid-19 cases: <span class="gNumber"> {{ info.cases }} </span><br>
            Today's covid-19 cases: <span class="gNumber"> {{ info.todayCases }} </span><br>
            Total deaths associated with covid 19: <span class="gNumber"> {{ info.deaths }} </span><br>
            Today's deaths associated with covid 19: <span class="gNumber"> {{ info.todayDeaths }} </span><br>
            Recovered patients : <span class="gNumber"> {{ info.recovered }} </span><br>
            Pantients active with covid-19: <span class="gNumber"> {{ info.active }} </span><br>
            Pantients with critical condition : <span class="gNumber"> {{ info.critical }} </span><br>
            Cases per one million people: <span class="gNumber"> {{ info.casesPerOneMillion }} </span><br>
            Total covid-19 test: <span class="gNumber"> {{ info.tests }} </span><br>
            Tests per one million people: <span class="gNumber"> {{ info.testsPerOneMillion }} </span><br><br><br>
          </div>
        </div>
      </div>


        <div>
           <div class="w3-container w3-content newsStand">
              <p class="w3-opacity"><b>Deaths from 22/01/2020</b></p> 
              <div class="w3-panel w3-white w3-card w3-display-container">
                <curve-compare
                  :key="rData"
                  v-bind:countryOneData="rData.countryOne.dataDeaths"
                  v-bind:countryTwoData="vc"
                  v-bind:countryOneName="v1"
                 v-bind:countryTwoName="''"
                />
              </div>
            </div> 
        </div>

        <div>
           <div class="w3-container w3-content newsStand">
              <p class="w3-opacity"><b>From first death</b></p> 
              <div class="w3-panel w3-white w3-card w3-display-container">
                <curve-compare
                  :key="rData"
                  v-bind:countryOneData="rData.countryOne.dataDeathsFromFirst"
                  v-bind:countryTwoData="vc"
                  v-bind:countryOneName="v1"
                 v-bind:countryTwoName="''"
                />
              </div>
            </div> 
        </div>

        <div>
           <div class="w3-container w3-content newsStand">
              <p class="w3-opacity"><b>Deaths per day after first death</b></p> 
              <div class="w3-panel w3-white w3-card w3-display-container">
                <curve-compare
                  :key="rData"
                  v-bind:countryOneData="rData.countryOne.dataDeathsPerDay"
                  v-bind:countryTwoData="vc"
                  v-bind:countryOneName="v1"
                 v-bind:countryTwoName="''"
                />
              </div>
            </div> 
        </div>

        <div>
           <div class="w3-container w3-content newsStand">
              <p class="w3-opacity"><b>Cases from 22/01/2020</b></p> 
              <div class="w3-panel w3-white w3-card w3-display-container">
                <curve-compare
                  :key="rData"
                  v-bind:countryOneData="rData.countryOne.dataCases"
                  v-bind:countryTwoData="vc"
                  v-bind:countryOneName="v1"
                 v-bind:countryTwoName="''"
                />
              </div>
            </div> 
        </div>

        <div>
           <div class="w3-container w3-content newsStand">
              <p class="w3-opacity"><b>Recovered patients</b></p> 
              <div class="w3-panel w3-white w3-card w3-display-container">
                <curve-compare
                  :key="rData"
                  v-bind:countryOneData="rData.countryOne.dataRecoverd"
                  v-bind:countryTwoData="vc"
                  v-bind:countryOneName="v1"
                 v-bind:countryTwoName="''"
                />
              </div>
            </div> 
        </div>

        <div>
           <div class="w3-container w3-content newsStand">
              <p class="w3-opacity"><b>Unique cases per day from first case</b></p> 
              <div class="w3-panel w3-white w3-card w3-display-container">
                <curve-compare
                  :key="rData"
                  v-bind:countryOneData="rData.countryOne.dataCasesFromFirst"
                  v-bind:countryTwoData="vc"
                  v-bind:countryOneName="v1"
                 v-bind:countryTwoName="''"
                />
              </div>
            </div> 
        </div>
        
       
    </div>
       


  </div>

</template>

<script>
    import CurveCompare from '@/components/CurveCompare'
    import Navi from '@/components/Nav'
    import axios from 'axios'

    export default {
      components: {
        CurveCompare,
        Navi
      },
      data(){
        return {
          v1 : 'UK',
          v2 : 'Italy',
          rData : {},
          info : {},
          vc : [],
        }
      },
      methods: {

        requestCurve(countryOnerq,countryTworq){
          axios.defaults.baseURL = 'http://localhost:9080/'
          axios.post(`api/compare/all`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.rData = response.data
          )).catch(function (error) {   
            console.log(error);
          });

          axios.post(`country`, {
            country : countryOnerq})
          .then(response  => (
              this.info = response.data
          )).catch(function (error) {   
            console.log(error);
          }); 
        },
        
        updateOne: function (msg) {
          this.v1 = msg
          this.requestCurve(this.v1,this.v2)
        },
        updateTwo: function (msg) {
          this.v2 = msg
          this.requestCurve(this.v1,this.v2)
        }
      },
      mounted(){

        this.requestCurve(this.v1,this.v2)

        axios.get('http://localhost:9080/api/countries/all')
          .then(response => (this.info = response.data.countries))
          .catch(function (error) {   
            console.log(error)
        });

        //line


      
      }
    }

</script>


<style>
  .m-md-2 .dropdown-menu {
    max-height: 400px;
    overflow-y: scroll;
  }
  .box {
    height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .box>* {
    flex: 1 1 80px;
  }

  .newsStand{
    width: 670px;
    height: 400px;
  }

</style>