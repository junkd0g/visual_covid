<template>
  <div >
    <div class="topnav" id="myTopnav">
      <router-link to="/" >
        <span class="font4 navGrey">stats<span  class="font4 blue">COVID</span></span>
      </router-link>
      <div class="topnav-right">
      <router-link to="/diagrams">
         <span class="font4 navGreyLight">Global</span>
      </router-link>
      <router-link to="/country/UK">
       <span class="font4 navGreyLight"> Countries</span>
      </router-link>
      <router-link to="/compare">
        <span class="font4 blue">Compare</span>
      </router-link>
      </div>
      
      <a href="javascript:void(0);" class="icon" v-on:click="navBar">
        <i class="fa fa-bars"></i>
      </a>

    </div>
  
    <router-view/>

  </div>
</template>

<script>
export default {
  methods: {
    navBar(){
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}

</script>