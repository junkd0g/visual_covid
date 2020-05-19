<template>

  <div>

    <div>
      <b-dropdown id="dropdown-1" :text="deathsFromFirst.countryOne.country" class="m-md-2">
        <b-dropdown-item  v-for="item in info" :key="item.position"  v-on:click="updateOne(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>

      <b-dropdown id="dropdown-1" :text="deathsFromFirst.countryTwo.country" class="m-md-2">
        <b-dropdown-item  id="marika" v-for="item in info" :key="item.position" v-on:click="updateTwo(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>
    </div>


    <div class="box">
        <div>
          Deaths from 22/01/2020
          <curve-compare
            :key="deathsFrom22"
            v-bind:countryOneData="deathsFrom22.countryOne.data"
            v-bind:countryTwoData="deathsFrom22.countryTwo.data"
            v-bind:countryOneName="deathsFrom22.countryOne.country"
            v-bind:countryTwoName="deathsFrom22.countryTwo.country"
          />
        </div>
        <div>
          From first death
          <curve-compare
            :key="deathsFromFirst"
            v-bind:countryOneData="deathsFromFirst.countryOne.data"
            v-bind:countryTwoData="deathsFromFirst.countryTwo.data"
            v-bind:countryOneName="deathsFromFirst.countryOne.country"
            v-bind:countryTwoName="deathsFromFirst.countryTwo.country"
          />
        </div>
        <div>
          Deaths per day after first death
          <curve-compare
            :key="deathsPerDay"
            v-bind:countryOneData="deathsPerDay.countryOne.data"
            v-bind:countryTwoData="deathsPerDay.countryTwo.data"
            v-bind:countryOneName="deathsPerDay.countryOne.country"
            v-bind:countryTwoName="deathsPerDay.countryTwo.country"
          />
        </div>
        <div>
          Recovered patients
          <curve-compare
            :key="recovery"
            v-bind:countryOneData="recovery.countryOne.data"
            v-bind:countryTwoData="recovery.countryTwo.data"
            v-bind:countryOneName="recovery.countryOne.country"
            v-bind:countryTwoName="recovery.countryTwo.country"
          />
        </div>
        <div>
          Cases from 22/01/2020
          <curve-compare
            :key="cases"
            v-bind:countryOneData="cases.countryOne.data"
            v-bind:countryTwoData="cases.countryTwo.data"
            v-bind:countryOneName="cases.countryOne.country"
            v-bind:countryTwoName="cases.countryTwo.country"
          />
        </div>
        <div>
          Unique cases per day from first case
          <curve-compare
            :key="casesUnique"
            v-bind:countryOneData="casesUnique.countryOne.data"
            v-bind:countryTwoData="casesUnique.countryTwo.data"
            v-bind:countryOneName="casesUnique.countryOne.country"
            v-bind:countryTwoName="casesUnique.countryTwo.country"
          />
        </div>
        <div>
            Over
        </div>
        
    </div>
       


  </div>

</template>

<script>
    import CurveCompare from './CurveCompare'
    import axios from 'axios'

    export default {
      components: {
        CurveCompare
      },
      data(){
        return {
          
          deathsFrom22 : {},
          deathsFromFirst : {},
          deathsPerDay : {},
          recovery: {},
          cases: {},
          casesUnique: {},
          info : [],
          v1 : 'UK',
          v2 : 'Italy',
        }
      },
      methods: {

        requestCurve(countryOnerq,countryTworq){
          axios.defaults.baseURL = 'http://localhost:9080/'
          axios.post(`compare`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.deathsFrom22 = response.data
          )).catch(function (error) {   
            console.log(error);
          });

          axios.post(`compare/firstdeath`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.deathsFromFirst = response.data
          )).catch(function (error) {   
            console.log(error);
          });

          axios.post(`compare/perday`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.deathsPerDay = response.data
          )).catch(function (error) {   
            console.log(error);
          });
          axios.post(`compare/recovery`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.recovery = response.data
          )).catch(function (error) {   
            console.log(error);
          });
          axios.post(`compare/cases`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.cases = response.data
          )).catch(function (error) {   
            console.log(error);
          });
          axios.post(`compare/cases/unique`, {
            countryOne : countryOnerq,
            countryTwo : countryTworq,
          })
          .then(response  => (
              this.casesUnique = response.data
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

        axios.get('http://localhost:9080/countries/all')
          .then(response => (this.info = response.data.countries))
          .catch(function (error) {   
            console.log(error)
        });
      
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

</style>