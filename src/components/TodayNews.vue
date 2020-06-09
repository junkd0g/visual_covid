<template>

  <div>
    <div class="w3-container w3-content newsStand">
      <p class="modeText"><b> {{ labelNews }} </b></p> 
      <div class="w3-panel mainPanel w3-card w3-display-container" >
        <p class="lilika">
          <b>
            {{ newsData[index].source}}
          </b>
        </p>
        <p> 
          {{ newsData[index].title }}
        </p>
        <i class="fa fa-arrow-circle-left marika3" v-on:click="updateBackwards"></i>
        <i class="fa fa-arrow-circle-right marika3" v-on:click="updateForward"></i>
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