<template>
  <div>
    <div class="dd">
      <div class="w3-container w3-content newsStandBig">
        <div class="w3-panel  w3-card w3-display-container mainPanel">
          <b-dropdown id="dropdown-1" :text="v1" class="m-md-2">
           <b-dropdown-item  v-for="item in dropdownData" :key="item"  v-on:click="updateOne(item.id)">{{ item.province }} </b-dropdown-item>
          </b-dropdown><br>
          Cases: <span class="gNumber"> {{county[index].cases}} </span><br>
          Deaths: <span class="gNumber"> {{county[index].deaths}} </span><br>
          Recoved: <span class="gNumber"> {{county[index].recovered}} </span><br>
        </div>
      </div>
    </div>

  </div> 
</template>


<script>

  export default {
    methods: {
      updateOne: function (msg) {
        this.v1 = this.dropdownData[msg].province
        this.index = msg
      }
    },
    props: {
      county: Array, 
    },
    mounted(){ 
      for (var i = 0; i < this.county.length; ++i) {
        this.dropdownData.push(
            {
              province : this.county[i].province,
              cases : this.county[i].cases,
              deaths : this.county[i].deaths,
              recovered : this.county[i].recovered,
              id : i,
            }   
        );
      }
       this.v1 = this.countries[0].country
    },
    data(){
      return {
        dropdownData : [],
        v1 : this.county[0].province,
        index : 0,
      }
    }
  }
</script>