<template>
  <div class="home">
    <navi/>
    <div class="box">

      <div>
        <World />
      </div>
      
      <div>
        <Hotspot />
      </div>

      <div>
        <Today
          :key="newsData"
          v-bind:pData="newsData.news.data"
          v-bind:label="'Latest covid-19 news'"
        />
      </div>

      <div>
        <Today
          :key="newsData"
          v-bind:pData="newsData.vaccine.data"
          v-bind:label="'Latest covid-19 vaccine news'"
        />
      </div>

      <div>
        <Today
          :key="newsData"
          v-bind:pData="newsData.treament.data"
          v-bind:label="'Latest covid019 treatment news'"
        />
      </div>

      <div>
        <GeneralStat />
      </div>

      <div>
        <DesktopBriefCountry 
          :key="countriesData"
          v-bind:countries="countriesData"
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
  import Hotspot from '@/components/HotspotCalculate'
  import DesktopBriefCountry from '@/components/DesktopBriefCountry'

export default {
  name: 'Dashboard',
  components: {
    Navi,
    GeneralStat,
    Today,
    World,
    Hotspot,
    DesktopBriefCountry
  },
  data() {
    return {
      newsData : {},
      countriesData: [],
    }
  },
  methods: {
    requestNews(){
      axios.get('http://localhost:9080/api/news/all')
        .then(response  => (
          this.newsData = response.data))
        .catch(function (error) {   
          console.log(error)
      })
    },
  },
  mounted(){
    this.requestNews()
    axios.defaults.baseURL = 'http://localhost:9080/api/'
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
