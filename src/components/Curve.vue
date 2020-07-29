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
        <p class="modeText">
          <b>
            Deaths from 22/01/2020
          </b>
        </p>
        <curve-compare
          :key="rData"
          v-bind:countryOneData="rData.countryOne.dataDeaths"
          v-bind:countryTwoData="rData.countryTwo.dataDeaths"
          v-bind:countryOneName="v1"
          v-bind:countryTwoName="v2"
        />
      </div> 

      <div>
        <br>
        <p class="modeText"> 
          <b>
            From first death
          </b>
        </p>
        <curve-compare
          :key="rData"
          v-bind:countryOneData="rData.countryOne.dataDeathsFromFirst"
          v-bind:countryTwoData="rData.countryTwo.dataDeathsFromFirst"
          v-bind:countryOneName="v1"
          v-bind:countryTwoName="v2"
        />
      </div>

      <div>
        <br>
        <p class="modeText">
          <b>
            Deaths per day after first death
          </b>
        </p>
        <curve-compare
          :key="rData"
          v-bind:countryOneData="rData.countryOne.dataDeathsPerDay"
          v-bind:countryTwoData="rData.countryTwo.dataDeathsPerDay"
          v-bind:countryOneName="v1"
          v-bind:countryTwoName="v2"
        />
      </div>
      <div>
        <br>
        <p class="modeText">
          <b>
            Recovered patients
          </b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataRecoverd"
            v-bind:countryTwoData="rData.countryTwo.dataRecoverd"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div>
        <div><br>
          <p class="modeText"><b>Cases from 22/01/2020</b></p>
          <curve-compare
            :key="rData"
            v-bind:countryOneData="rData.countryOne.dataCases"
            v-bind:countryTwoData="rData.countryTwo.dataCases"
            v-bind:countryOneName="v1"
            v-bind:countryTwoName="v2"
          />
        </div>
        <div><br>
          <p class="modeText"><b>Unique cases per day from first case</b></p>
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