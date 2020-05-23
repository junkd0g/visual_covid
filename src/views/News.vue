<template>

  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-metro.css">
    <navi/>
    <div class="box">
      <div v-for="item in newsData" :key="item"> 
        <div class="w3-container w3-content">
          <div class="w3-panel w3-white w3-card w3-display-container newsStand">
              <p class="lilika"><b> {{ item.source}} </b></p>
              <p> {{ item.title }}</p>
              <a class="w3-bar-item  marika openLink" :href="item.url" target="_blank">
                  <i style="font-size:24px" class="fa">&#xf08e;</i>
              </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

    import axios from 'axios'
    import Navi from '@/components/Nav'

    export default {
      components: {
        Navi
      },
      data(){
        return {
          newsData : {},
        }
      },
      methods: {
        requestCurve(){
          axios.get('http://localhost:9080/api/news')
            .then(response  => (
              this.newsData = response.data.data))
            .catch(function (error) {   
              console.log(error)
          });
        }
      },
      mounted(){

        this.requestCurve()
      
      }
   }

</script>

<style>
  @import '../scss/_box.scss';
  @import '../scss/_card.scss';

</style>