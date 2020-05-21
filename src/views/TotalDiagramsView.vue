<template>
  <div class="home">
    <navi/>

    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/TotalDiagrams.vue'
import Navi from '@/components/Nav'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navi
  }
}
</script>
