<template>

  <div>
    <div class="w3-container w3-content newsStandSmall">
      <p class="modeText"><b> {{ labelNews }} </b></p> 
      <div class="w3-panel w3-card w3-display-container mainPanel" >
        <p class="lilika">
          <b> {{ newsData[index].source}} </b>
        </p>
        <p>  {{ newsData[index].title }} </p>
        <span class="marika3"><i class="fa fa-arrow-circle-left" v-on:click="updateBackwards"></i></span>
        <span class="marika3"> <i class="fa fa-arrow-circle-right" v-on:click="updateForward"></i></span>
        <a class="w3-bar-item openLink" :href="newsData[index].url" target="_blank">
          <i class="fa">&#xf08e;</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>  
    export default {
      data(){
        return {
          newsData : this.pData,
          labelNews : this.label,
          index : 0
        }
      },
      props: {
        pData: {},
        label: String
      },
      methods: {
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
        }
      }
   }
</script>