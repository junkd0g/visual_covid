<template>

  <div>
    <div><br>
      <b-dropdown id="dropdown-1" :text="v1" class="m-md-2">
        <b-dropdown-item  v-for="item in info" :key="item.position"  v-on:click="updateOne(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>

      <b-dropdown id="dropdown-1" :text="v2" class="m-md-2">
        <b-dropdown-item  id="marika" v-for="item in info" :key="item.position" v-on:click="updateTwo(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>
    </div>


    <div class="box">
        <div><br>
          Deaths from 22/01/2020
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataDeaths"
            v-bind:countryTwoData="rData.countryTwo.dataDeaths"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div> <br>  <br>
        <div><br>
          From first death
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataDeathsFromFirst"
            v-bind:countryTwoData="rData.countryTwo.dataDeathsFromFirst"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div> <br>  <br>
        <div><br>
          Deaths per day after first death
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataDeathsPerDay"
            v-bind:countryTwoData="rData.countryTwo.dataDeathsPerDay"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div> <br>  <br>
        <div><br>
          Recovered patients
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataRecoverd"
            v-bind:countryTwoData="rData.countryTwo.dataRecoverd"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div> <br>  <br>
        <div><br>
          Cases from 22/01/2020
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCases"
            v-bind:countryTwoData="rData.countryTwo.dataCases"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div> <br>  <br>
        <div><br>
          Unique cases per day from first case
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCasesFromFirst"
            v-bind:countryTwoData="rData.countryTwo.dataCasesFromFirst"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
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
          v1 : 'UK',
          v2 : 'Italy',
          rData : {}
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
#dropdown-1 + #dropdown-1{
   margin-left:20px;
}
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