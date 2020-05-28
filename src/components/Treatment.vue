<template>

  <div class="outer">

    <div class="w3-container w3-content ">
        <p class="modeText"><b>Covid 19 treatment latest news </b></p> 
        <div class="w3-panel w3-card w3-display-container totalStand"  >
            <p class="lilika"><b>{{ newsData[index].source}}</b></p>
            <p> {{ newsData[index].title }}</p>
            <i class="fa fa-arrow-circle-left marika3" v-on:click="updateBackwards" v-on:keyup="keymonitorBackward"></i>
            <i class="fa fa-arrow-circle-right marika3" v-on:click="updateForward" v-on:keyup="keymonitorForward"></i>
            <a class="w3-bar-item  marika openLink" :href="newsData[index].url" target="_blank">
                <i style="font-size:24px" class="fa">&#xf08e;</i>
            </a>
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
          index : 0
        }
      },
      methods: {
        requestCurve(){
          axios.get('http://localhost:9080/api/news/treatment')
            .then(response  => (
              this.newsData = response.data.data))
            .catch(function (error) {   
              console.log(error)
          });
        },
        updateForward(){
            var size = this.newsData.length-1;
            if (this.index < size){
                this.index++
            }
        },
        updateBackwards(){
            if (this.index > 0){
                this.index--
            }
        },
        keymonitorBackward(){

        },
        keymonitorForward: function(event) {
            console.log(event.key);
            if(event.key == "Enter"){
                console.log("enter key was pressed!");
            }
        }
      },
      mounted(){
        this.requestCurve()
      }
   }

</script>