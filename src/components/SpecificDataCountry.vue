<template>
  <div>
    <div class="dd">
      <div class="w3-container w3-content newsStandBig">
          <b-table id="my-table" class="tsize table table-fixed" striped :items="county" :fields="fields"/>

      </div>
    </div>

  </div> 
</template>


<script>

  export default {
    props: {
      county: Array, 
    },
    data(){
      return {
        fields: [
          {
            key: 'province',
            sortable: true
          },
          {
            label: "TOTAL CASES",
            key: 'cases',
            sortable: true
          },
          {
            label: "TOTAL DEATHS",
            key: 'deaths',
            sortable: true
          },
          {
            key: 'recovered',
            sortable: true,
          },
        ],
      }
    }
  }
</script>