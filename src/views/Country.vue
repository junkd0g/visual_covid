<template>

  <div>
      <navi/>
  <div class="container kostja">

    <b-dropdown id="dropdown-1" size="lg" :text="v1" class="m-md-2">
      <b-dropdown-item  v-for="item in info" :key="item.position"  v-on:click="updateOne(item)">{{ item }} </b-dropdown-item>
    </b-dropdown>

      
    <div>
      <span class="font0">TOTAL CASES:</span> <br><span class="font1">{{ infoCountry.cases.toLocaleString()  }} </span><br><br>
      <span class="font0">TOTAL DEATHS</span><br> <span class="font1"> {{ infoCountry.deaths.toLocaleString() }} </span><br><br>
      <div class="row">
        <div class="col-3">
          <div class="fiftyPer"> <span class="font0"> TODAY CASES </span><br><span class="font3 blue">{{ infoCountry.todayCases.toLocaleString() }} </span></div>
        </div>
        <div class="col-9">  
          <div class="fiftyPer"><span class="font0 "> TODAY DEATHS </span><br><span class="font3 pink">{{ infoCountry.todayDeaths.toLocaleString() }} </span></div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="fiftyPer"> <span class="font0"> ACTIVE CASES: </span><br><span class="font3 navGreyLight">{{ infoCountry.active.toLocaleString()  }} </span></div>
        </div>
        <div class="col-9">
          <div class="fiftyPer"><span class="font0 "> CRITICAL CONDITION: </span><br><span class="font3 navGreyLight">{{ infoCountry.critical.toLocaleString() }} </span></div>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <div class="thirtyPer"> <span class="font0"> TOTAL TESTS: </span><br><span class="font3v2 almostBlack">{{ infoCountry.tests.toLocaleString()  }} </span></div>
        </div>
        <div class="col-2">
          <div class="thirtyPer"><span class="font0 "> TEST / 1M </span><br><span class="font3v2 almostBlack">{{ infoCountry.testsPerOneMillion.toLocaleString() }} </span></div>
        </div>
        <div class="col-2">
          <div class="thirtyPer"><span class="font0 "> CASES / 1M </span><br><span class="font3v2 almostBlack">{{ infoCountry.casesPerOneMillion.toLocaleString() }} </span></div>
        </div>
      </div>
    </div>
    <br>

    <div class="box">

        <div class="dd">
          <p class="modeText"><b>Deaths from 22/01/2020</b></p>
            <curve-compare
              :key="rData"
              v-bind:countryOneData="rData.countryOne.dataDeaths"
              v-bind:countryTwoData="vc"
              v-bind:countryOneName="v1"
              v-bind:countryTwoName="''"
            />
        </div>
        <br>
        <div class="dd">
          <p class="modeText"><b>Deaths per day</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataDeathsPerDay"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>
        <br>
        <div class="dd">
          <p class="modeText"><b>Cases from 22/01/2020</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCases"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>
        <br>
        <div class="dd">
          <p class="modeText"><b>Cases per day</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCasesFromFirst"
            v-bind:countryTwoData="vc"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="''"
          />
        </div>
        <br>
        <div class="dd" v-if="specificDataCountry.data.length > 1">
          <p class="modeText"><b>General country's province data</b></p>
          <specific-data-country
            :key="rData"
            v-bind:county="specificDataCountry.data"
          />
        </div>
    </div>
    </div>
  </div>

</template>

<script>
  import CurveCompare from '@/components/CurveCompare'
  import Navi from '@/components/Nav'
  import SpecificDataCountry from '@/components/SpecificDataCountry'
  import axios from 'axios'

  export default {
    components: {
      CurveCompare,
      Navi,
      SpecificDataCountry
    },
    data(){
      return {
        v1 : this.$route.params.id,
        v2 : 'Italy',
        rData : {},
        info : {},
        infoCountry : {},
        specificDataCountry : {},
        vc : [],
      }
    },
    methods: {
      requestCurve(countryOnerq,countryTworq){
        axios.defaults.baseURL = 'http://54.246.200.221/'
        axios.post(`api/compare/all`, {
          countryOne : countryOnerq,
          countryTwo : countryTworq,
        })
        .then(response  => (
         this.rData = response.data
        )).catch(function (error) {   
          console.log(error);
        });

        axios.get('http://54.246.200.221/api/csse/' + this.v1)
       .then(response => (this.specificDataCountry = response.data))
        .catch(function (error) {
          console.log(error)
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

      axios.get('http://54.246.200.221/api/countries/all')
        .then(response => (this.info = response.data.countries))
        .catch(function (error) {   
          console.log(error)
       });

    }

  }
</script>