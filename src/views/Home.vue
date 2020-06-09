<template>
  <div class="home">
    <navi/>
    <dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Navi from '@/components/Nav'

export default {
  name: 'Home',
  components: {
    Navi,
    Dashboard
  }
} 
</script>
