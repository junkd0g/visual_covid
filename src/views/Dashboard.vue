<template>
  <div class="home">
    <navi/>
    <div class="box">

      <div class="dd">
        <GeneralStat />
      </div>


      <div class="dd">
        <World />
      </div>


      
          


    </div>

  </div>
</template>

<script>
  import Navi from '@/components/Nav'
  import axios from 'axios'
  import GeneralStat from '@/components/GeneralStat'
  //import Today from '@/components/TodayNews'
  import World from '@/components/WorldCalculate'
  //import BriefCountry from '@/components/BriefCountry'
  //import Hotspot from '@/components/Hotspot'


export default {
  name: 'Dashboard',
  components: {
    Navi,
    GeneralStat,
    //Today,
    World,
    //Hotspot,
    //BriefCountry
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
