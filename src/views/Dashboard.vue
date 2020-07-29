<template>
  <div class="home">
    <navi/>
    <div class="box">

      <div class="dd">
        <World />
      </div>
      
      <div class="dd">
        <div >
          <span class="modeText"> Update amount of days you want to check: </span>
          <b-dropdown id="dropdown-1" :text="drowbownText" class="m-md-2">
            <b-dropdown-item  v-for="item in days" :key="item"  v-on:click="updateOne(item)">{{ item }} </b-dropdown-item>
          </b-dropdown>
        </div>
        <Hotspot 
          :key="worldData"
          v-bind:most="worldData.mostCases.data"
          v-bind:second="worldData.secondCases.data"
          v-bind:third="worldData.thirdCases.data"
          v-bind:country="worldData.mostCases.country"
          v-bind:countryTwo="worldData.secondCases.country"
          v-bind:countryThree="worldData.thirdCases.country"
          v-bind:title="titleCases"
          v-bind:desktopHeight=350
          v-bind:desktopWidth=500
        />
      </div>

      <div class="dd">
        <br>
        <br>
        <br>
        <Hotspot 
          :key="worldData"
          v-bind:most="worldData.mostDeaths.data"
          v-bind:second="worldData.secondDeaths.data"
          v-bind:third="worldData.thirdDeaths.data"
          v-bind:country="worldData.mostDeaths.country"
          v-bind:countryTwo="worldData.secondDeaths.country"
          v-bind:countryThree="worldData.thirdDeaths.country"
          v-bind:title="titleDeaths"
          v-bind:desktopHeight=350
          v-bind:desktopWidth=500
        />
      </div>

       <div class="dd">
        <GeneralStat />
        <BriefCountry
          :key="countriesData"
          v-bind:countries="countriesData"
        />
      </div>

      <div class="dd">
        <Today
          :key="newsData"
          v-bind:pData="newsData.news.data"
          v-bind:label="'Latest covid-19 news'"
        />
         <Today
          :key="newsData"
          v-bind:pData="newsData.vaccine.data"
          v-bind:label="'Latest covid-19 vaccine news'"
        />
        <Today
          :key="newsData"
          v-bind:pData="newsData.treament.data"
          v-bind:label="'Latest covid019 treatment news'"
        />
      </div>

    </div>

  </div>
</template>

<script>
  import Navi from '@/components/Nav'
  import axios from 'axios'
  import GeneralStat from '@/components/GeneralStat'
  import Today from '@/components/TodayNews'
  import World from '@/components/WorldCalculate'
  import BriefCountry from '@/components/BriefCountry'
  import Hotspot from '@/components/Hotspot'


export default {
  name: 'Dashboard',
  components: {
    Navi,
    GeneralStat,
    Today,
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
    requestNews(){
      axios.get('http://54.246.200.221/api/news/all')
        .then(response  => (
          this.newsData = response.data))
        .catch(function (error) {   
          console.log(error)
      })
    },
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
    this.requestNews()
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
