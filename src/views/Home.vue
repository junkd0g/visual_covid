<template>
  <div class="home">
    <navi/>
    <Total />
  </div>
</template>

<script>
import Total from '@/components/Total.vue'
import Navi from '@/components/Nav'

export default {
  name: 'Home',
  components: {
    Total,
    Navi
  }
} 
</script>
