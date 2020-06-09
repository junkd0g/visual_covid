<template>
    <div class="outer">
        <div>
            <div class="w3-container w3-content newsStand">
                <div class="w3-panel w3-card w3-display-container mainPanel">
                    <p class="lilika"><b> {{ countries[index].country }} </b></p>
                    Total covid-19 cases: <span class="gNumber"> {{ countries[index].cases }} </span><br>
                    Today's covid-19 cases: <span class="gNumber"> {{ countries[index].todayCases }} </span><br>
                    Total deaths associated with covid 19: <span class="gNumber"> {{ countries[index].deaths }} </span><br>
                    Today's deaths associated with covid 19: <span class="gNumber"> {{ countries[index].todayDeaths }} </span><br>
                    Recovered patients : <span class="gNumber"> {{ countries[index].recovered }} </span><br>
                    Pantients active with covid-19: <span class="gNumber"> {{ countries[index].active }} </span><br>
                    Pantients with critical condition : <span class="gNumber"> {{ countries[index].critical }} </span><br>
                    Cases per one million people: <span class="gNumber"> {{ countries[index].casesPerOneMillion }} </span><br>
                    Total covid-19 test: <span class="gNumber"> {{ countries[index].tests }} </span><br>
                    Tests per one million people: <span class="gNumber"> {{ countries[index].testsPerOneMillion }} </span><br>
                    <i class="marika3 fa fa-arrow-circle-left" v-on:click="updateBackwards"></i>
                    <i class="fa fa-arrow-circle-right marika3" v-on:click="updateForward"></i>
                    <b-dropdown id="dropdown-1" :text="v1" class="m-md-2">
                        <b-dropdown-item  v-for="ditem in dropdownData" :key="ditem"  v-on:click="updateOne(ditem)">{{ ditem.country }} </b-dropdown-item>
                    </b-dropdown>
                    <a class="w3-bar-item openLink" :href="'/country/'+countries[index].country" target="_blank">
                        <i class="fa">&#xf08e;</i>
                    </a>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    name: "DesktopBriefCountry",
    components: {

    },

    methods: {
        updateForward(){
            var size = this.countries.length-1;
            if (this.index < size){
                this.index++
                this.v1 =  this.countries[this.index].country
            }
        },
        updateBackwards(){
            if (this.index > 0){
                this.index--
                this.v1 =  this.countries[this.index].country
            }
        },
        updateOne: function (msg) {
            this.v1 = msg.country
            this.index = msg.id
        }
    },
    props: {
        countries: Array,
    },
    mounted(){
        for (var i = 0; i < this.countries.length; ++i) {
           this.dropdownData.push(
                {
                    country : this.countries[i].country,
                    id : i
                }   
            );
        }
        this.v1 = this.countries[0].country
    },
    data() {
      return {
            dropdownData : [],
            index: 0,
            v1 : '',
      };
    }
  };
</script>