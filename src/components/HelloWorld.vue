<template>

  <div>

    <div class="fixed-top">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item href="cv"><dt class="text-light">CV</dt></b-nav-item>
          <b-nav-item href="blog"><dt class="text-light">Blog</dt></b-nav-item>
        </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <Covid />
  </div>

</template>

<script>
    

   import Covid from './Curve'

    export default {
     components: {
        Covid
      }
   }

</script>
