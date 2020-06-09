<template>

  <div>

    <br>
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
          :key="sdeaths"
          v-bind:countries="sdeaths"
        />
      </div>
    
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import GeneralStat from './GeneralStat'
  import Today from './TodayNews'
  import World from './WorldCalculate'
  import Hotspot from './HotspotCalculate'
  import DesktopBriefCountry from './DesktopBriefCountry'

  import { isMobile } from 'mobile-device-detect';

  export default {
    components: {
      GeneralStat,
      Today,
      World,
      Hotspot,
      DesktopBriefCountry
    },
    data() {
      return {
        newsData : {},
        sdeaths: [],
      }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        var x = document.getElementById("statiscalNumber");
        var y = document.getElementById("mobileStatiscalNumberID");

        if (isMobile == true || window.innerWidth < 800) {
          x.style.display = "none";
          y.style.display = "block";
        }else{
          y.style.display = "none";
          x.style.display = "block";
        }
      },
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
            this.sdeaths = response.data.data
          )
        )
        .catch(function (error) {   
          console.log(error);
        });
    }
  }
</script>