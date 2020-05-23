<template>

  <div>
      <navi/>
      <Curve />
  </div>

</template>

<script>
    

   import Curve from './../components/Curve'
   import Navi from '@/components/Nav'

    export default {
     components: {
        Curve,
        Navi
      }
   }

</script>