<template>
  <div class="home">
    <navi/>

    <TotalDiagrams />
  </div>
</template>

<script>
import TotalDiagrams from '@/components/TotalDiagrams.vue'
import Navi from '@/components/Nav'

export default {
  name: 'Home',
  components: {
    TotalDiagrams,
    Navi
  }
}
</script>
