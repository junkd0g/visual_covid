<template>
  <div>
      <div class="outer">                        
        <div class="w3-container w3-content newsStand"> 
          <b-table id="my-table" class="tsize table table-fixed" striped :items="countries" :fields="fields"/>
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    name: "DesktopBriefCountry",
    methods: {
      updateForward(){
        var size = this.countries.length-1;
        if (this.index < size){
          this.index++
          this.v1 =  this.countries[this.index].country
        }
      },
      updateBackwards(){
        if (this.index > 0){
          this.index--
          this.v1 =  this.countries[this.index].country
        }
      },
      updateOne: function (msg) {
        this.v1 = msg.country
        this.index = msg.id
      }
    },
    props: {
       countries: Array, 
    },
    mounted(){ 
      for (var i = 0; i < this.countries.length; ++i) {
        this.dropdownData.push(
            {
              country : this.countries[i].country,
              id : i
            }   
        );
      }
       this.v1 = this.countries[0].country
    },
    data() {
      return {
        dropdownData : [],
        index: 0,
        v1 : '',
        fields: [
          {
            label: "",
            key: 'country',
            sortable: false
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
            label: "Cases 1/M",
            key: 'casesPerOneMillion',
            sortable: true,
          },
          {
            label: "Tests 1/M",
            key: 'testsPerOneMillion',
            sortable: true,
          }
        ],
      };
    }
  };
</script>