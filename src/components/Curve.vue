<template>

  <div>

    <div>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item  v-for="item in info" :key="item.position"  v-on:click="updateOne(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>
      <label id="textOP-1"> {{ okman1.countryOne.country }}</label>
    </div>


    <div>
      <b-dropdown id="dropdown-2" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item  v-for="item in info" :key="item.position" v-on:click="updateTwo(item)">{{ item }} </b-dropdown-item>
      </b-dropdown>
      <label id="textOP-2"> {{ okman1.countryTwo.country }}</label>
    </div>

       
       From 22/01/2020
       <curve-compare 
        v-bind:countryOneData="okman1.countryOne.data"
        v-bind:countryTwoData="okman1.countryTwo.data"
        v-bind:countryOneName="okman1.countryOne.country"
        v-bind:countryTwoName="okman1.countryTwo.country"
      >

      </curve-compare >

      From first death
      <curve-compare 
        v-bind:countryOneData="okman2.countryOne.data"
        v-bind:countryTwoData="okman2.countryTwo.data"
        v-bind:countryOneName="okman2.countryOne.country"
        v-bind:countryTwoName="okman2.countryTwo.country"
      >
      </curve-compare >
      Deaths per day after first death
      <curve-compare 
        v-bind:countryOneData="okman3.countryOne.data"
        v-bind:countryTwoData="okman3.countryTwo.data"
        v-bind:countryOneName="okman3.countryOne.country"
        v-bind:countryTwoName="okman3.countryTwo.country"
      >

      </curve-compare >


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
          
          okman1 : {},
          okman2 : {},
          okman3 : {},
          info : [],
          c1 : '',
          c2 : '',
        }
      },
      methods: {
        
        updateOne: function (msg) {
          var select = document.getElementById('textOP-1');
          select.textContent = msg
           
          var v1 = "Italy"
          var v2 = msg

          axios.defaults.baseURL = 'http://localhost:9080/'
          axios.post(`compare`, {
            countryOne : v1,
            countryTwo : v2,
          })
          .then(response  => (
              this.okman1 = response.data
          )).catch(function (error) {   
            alert(error);
          });

          axios.post(`compare/firstdeath`, {
            countryOne : v1,
            countryTwo : v2,
          })
          .then(response  => (
              this.okman2 = response.data
          )).catch(function (error) {   
            alert(error);
          });

          axios.post(`compare/perday`, {
            countryOne : v1,
            countryTwo : v2,
          })
          .then(response  => (
              this.okman3 = response.data
          )).catch(function (error) {   
            alert(error);
          });












        },
        updateTwo: function (msg) {
          var select = document.getElementById('textOP-2');
          select.textContent = msg
        }
      },
      mounted(){
        var c1 = "S. Korea"
        var c2 = "Greece"

        axios.defaults.baseURL = 'http://localhost:9080/'
        axios.post(`compare`, {
            countryOne : c1,
            countryTwo : c2,
          })
          .then(response  => (
              this.okman1 = response.data
          )
        ).catch(function (error) {   
          alert(error);
        });

        axios.post(`compare/firstdeath`, {
            countryOne : c1,
            countryTwo : c2,
          })
          .then(response  => (
              this.okman2 = response.data
          )
        ).catch(function (error) {   
          alert(error);
        });

        axios.post(`compare/perday`, {
            countryOne : c1,
            countryTwo : c2,
          })
          .then(response  => (
              this.okman3 = response.data
          )
        ).catch(function (error) {   
          alert(error);
        });

        axios.get('http://localhost:9080/countries/all')
          .then(response => (this.info = response.data.countries))
          .catch(function (error) {   
            alert(error)
        });
      
      }
    }

</script>


<style scoped>

</style>