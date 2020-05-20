<template>

  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-metro.css">

    <br><br>
    <div v-for="item in newsData" :key="item"> 
      <div class="w3-container">
        <div class="row">
          <div class="col-md-4"></div>
            <div class="container">
              <div class="col-md-4">
                <div class="panel panel-danger">
                  <div class="panel-heading">
                    <a :href="item.url" target="_blank"> 
                      <h3 class="panel-title"><i class="fa" aria-hidden="true"></i>
                        {{ item.title }}
                      </h3>
                    </a>
                  </div>
                  <div class="panel-body">
                    <a class="twitter-timeline" data-width="100%" :href="item.sourceURL" target="_blank">
                      {{ item.source }}
                    </a> 
                  </div>
                </div>
                <hr class="new4">
              </div>
            </div>
          </div>
        </div>
      </div>    

  </div>
</template>

<script>

    import axios from 'axios'
  
    export default {
      data(){
        return {
          newsData : {},
        }
      },
      methods: {
        requestCurve(){
          axios.get('http://localhost:9080/news')
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
   .box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .box>* {
    flex: 1 1 ;
  }
  a:hover {
    color: #20c997;
  }

  hr.new4 {
    border: 1px solid;
  }

  .description{
    position:absolute;
    top: 150px;
    right: 150px;
    width: 600px;
  }

</style>