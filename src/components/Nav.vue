<template>
  <div >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    

    <div class="topnav" id="myTopnav">
      <router-link to="/" > <i class="fa fa-home"></i></router-link>
      <router-link to="/country">Country</router-link>
      <router-link to="/diagrams">Total Statistics Diagrams</router-link>
      <router-link to="/compare">Compare</router-link>
      <router-link to="/news">News</router-link>
      
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