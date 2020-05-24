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
    </div> <br>

    <div class="box">
      
      <div class="dd">
        <p class="w3-opacity"><b>General country's data</b></p>
        <div class="w3-container w3-content newsStand">
          <div class="w3-panel w3-white w3-card w3-display-container">
            <p class="lilika"><b><span class="gNumber"> {{ infoCountry.country }} </span> </b></p>
            Total covid-19 cases: <span class="gNumber"> {{ infoCountry.cases }} </span><br>
            Today's covid-19 cases: <span class="gNumber"> {{ infoCountry.todayCases }} </span><br>
            Total deaths associated with covid 19: <span class="gNumber"> {{ infoCountry.deaths }} </span><br>
            Today's deaths associated with covid 19: <span class="gNumber"> {{ infoCountry.todayDeaths }} </span><br>
            Recovered patients : <span class="gNumber"> {{ infoCountry.recovered }} </span><br>
            Pantients active with covid-19: <span class="gNumber"> {{ infoCountry.active }} </span><br>
            Pantients with critical condition : <span class="gNumber"> {{ infoCountry.critical }} </span><br>
            Cases per one million people: <span class="gNumber"> {{ infoCountry.casesPerOneMillion }} </span><br>
            Total covid-19 test: <span class="gNumber"> {{ infoCountry.tests }} </span><br>
            Tests per one million people: <span class="gNumber"> {{ infoCountry.testsPerOneMillion }} </span><br>
          </div>
        </div>
      </div>

        
        <div class="dd">
          <p class="w3-opacity"><b>Deaths from 22/01/2020</b></p>
            <curve-compare
              :key="rData"
              v-bind:countryOneData="rData.countryOne.dataDeaths"
              v-bind:countryTwoData="vc"
              v-bind:countryOneName="v1"
              v-bind:countryTwoName="''"
            />
        </div>

        <div class="dd">
          <br>
          <p class="w3-opacity"><b>Deaths from first death</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataDeathsFromFirst"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>

        <div class="dd">
          <p class="w3-opacity"><b>Deaths per day</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataDeathsPerDay"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>

        <div class="dd">
          <p class="w3-opacity"><b>Cases from 22/01/2020</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCases"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>

        <div class="dd">
          <p class="w3-opacity"><b>Cases per day</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCasesFromFirst"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>

        <div class="dd">
          <p class="w3-opacity"><b>Recovered pantients</b></p>
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
          infoCountry : {},
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

          axios.post(`api/country`, {
            country : countryOnerq})
          .then(response  => (
              this.infoCountry = response.data
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
      
      }
    }

</script>


<style>
  @import '../scss/_box.scss';
  @import '../scss/_bigcard.scss';

  .m-md-2 .dropdown-menu {
    max-height: 400px;
    overflow-y: scroll;
  }
  .dd + .dd{
   margin-bottom:50px;
}

@media only screen 
and (min-device-width : 375px) 
and (max-device-width : 800px) {
.newsStand{
    width: 380px;
    height: 290px;
  }
}
</style>