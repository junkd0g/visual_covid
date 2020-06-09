<template>
  <div >
    <div class="topnav" id="myTopnav">
      <router-link to="/" >
        <i class="fa fa-home"></i>
      </router-link>
      <router-link to="/diagrams">
        Global Data
      </router-link>
      <router-link to="/country">
        Country Data
      </router-link>
      <router-link to="/compare">
        Compare Countries' Data
      </router-link>
      <router-link to="/news">
        News
      </router-link>
      
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