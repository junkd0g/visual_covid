<template>

  <div>
    <navi/>
    <div class="box" >
      <div v-for="item in newsData.slice(from,to)" :key="item">
        <div class="w3-container w3-content">
          <div style="height:150px;" class="w3-panel mainPanel w3-card w3-display-container newsStand">
            <p class="lilika"><b> {{ item.source}} </b></p>
            <p> {{ item.title }}</p>
            <a class="w3-bar-item marika2 openLink" :href="item.url" target="_blank">
              <i style="font-size:24px" class="fa">&#xf08e;</i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <i id="firstNewsPag" class="newsPag" v-on:click="updateOne(1)">1, </i>
      <i id="secondNewsPag" class="newsPag" v-on:click="updateOne(2)">2, </i>
      <i id="thirdNewsPag" class="newsPag" v-on:click="updateOne(3)">3, </i>
      <i id="fourNewsPag" class="newsPag" v-on:click="updateOne(4)">4, </i>
      <i id="fiveNewsPag" class="newsPag" v-on:click="updateOne(5)">5 </i>
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
          from : 0,
          to: 10,
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
        },
        updateOne: function (item) {
          this.from = (item * 10 ) - 10
          this.to = item * 10
        }
      },
      mounted(){
        this.requestCurve()
      }
   }

</script>
