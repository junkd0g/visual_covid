<template>
  <div class="home">
    <navi/>
    <div>
      <GeneralStat />
    </div>
    <div>
      <World />
    </div>

    <div class="box">
      <div class="dd HotSpotStand">
        <Hotspot 
          :key="worldData"
          v-bind:most="worldData.mostDeaths.data"
          v-bind:second="worldData.secondDeaths.data"
          v-bind:third="worldData.thirdDeaths.data"
          v-bind:country="worldData.mostDeaths.country"
          v-bind:countryTwo="worldData.secondDeaths.country"
          v-bind:countryThree="worldData.thirdDeaths.country"
          v-bind:title="'COUNTRIES WITH MOST DEATHS'"
          v-bind:desktopHeight=350
          v-bind:desktopWidth=500
        />
      </div>
      <div  class="dd HotSpotStand">
        <Hotspot 
          :key="worldData"
          v-bind:most="worldData.mostCases.data"
          v-bind:second="worldData.secondCases.data"
          v-bind:third="worldData.thirdCases.data"
          v-bind:country="worldData.mostCases.country"
          v-bind:countryTwo="worldData.secondCases.country"
          v-bind:countryThree="worldData.thirdCases.country"
          v-bind:title="'COUNTRIES WITH MOST CASES'"
          v-bind:desktopHeight=350
          v-bind:desktopWidth=500
        />
      </div>
    </div>
    <div class="dd">
        <BriefCountry 
          :key="countriesData"
          v-bind:countries="countriesData"
          />
      </div>
  </div>
</template>

<script>
  import Navi from '@/components/Nav'
  import axios from 'axios'
  import GeneralStat from '@/components/GeneralStat'
  import World from '@/components/WorldCalculate'
  import BriefCountry from '@/components/BriefCountry'
  import Hotspot from '@/components/Hotspot'


export default {
  name: 'Dashboard',
  components: {
    Navi,
    GeneralStat,
    World,
    Hotspot,
    BriefCountry
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  data() {
    return {
      newsData : {},
      countriesData: [],
      worldData : {},
      days : [3, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 70],
      drowbownText : 10,
      titleCases : "Countries with most cases for the last 10 days",
      titleDeaths : "Countries with most deaths for the last 10 days"

    }
  },
  methods: {
    requestWorld(days){
      axios.get('http://54.246.200.221/api/hotspot/' + days)
        .then(response  => (
          this.worldData = response.data))
        .catch(function (error) {   
          console.log(error)
      })
    },
    updateOne: function (item) {
      this.drowbownText = item
      this.titleCases =  "Countries with most cases for the last " + this.drowbownText + " days"
      this.titleDeaths =  "Countries with most deaths for the last " + this.drowbownText + " days"
      this.requestWorld(item)
    }
  },
  mounted(){
    this.requestWorld(this.drowbownText)

    axios.defaults.baseURL = 'http://54.246.200.221/api/'
    axios.post(`sort`, {
      type: 'deaths'
    })
      .then(response  => (
        this.countriesData = response.data.data
      )
    )
    .catch(function (error) {   
      console.log(error);
    });
  }
} 
</script>
