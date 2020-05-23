<template>
  <div class="home">
    <navi/>
    <Covid />
  </div>
</template>

<script>
import Covid from '@/components/Covid.vue'
import Navi from '@/components/Nav'

export default {
  name: 'Home',
  components: {
    Covid,
    Navi
  }
} 
</script>
