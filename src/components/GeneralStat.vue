<template>

  <div class="outer">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-metro.css">
    <div class="total">
        <div class="w3-container">
            <div class="row">
                <div class="col-md-4"></div>
                    <div class="container">
                        <div class="col-md-4">
                            <div class="panel panel-danger">
                                <div class="panel-heading">
                                    <hr class="new4">
                                    <h5 class="panel-title"><i class="fa" aria-hidden="true"></i>
                                        Total cases: <span class="gNumber">{{ info.data.totalCases }} </span><br>
                                    </h5>
                                    <h5 class="panel-title"><i class="fa" aria-hidden="true"></i>
                                        Total deaths: <span class="gNumber"> {{ info.data.totalDeaths }} </span><br>
                                    </h5>
                                    <h5 class="panel-title"><i class="fa" aria-hidden="true"></i>
                                        Today's total cases: <span class="gNumber">{{ info.data.todayTotalCases }} </span><br>
                                    </h5>
                                    <h5 class="panel-title"><i class="fa" aria-hidden="true"></i>
                                        Today's total deaths: <span class="gNumber">{{ info.data.todayTotalDeaths }} </span><br>
                                    </h5> 
                                    <h5 class="panel-title"><i class="fa" aria-hidden="true"></i>
                                        Today's percentage of total cases: <span class="gNumber">{{ info.data.todayPerCentOfTotalCases }}% </span><br>
                                    </h5>
                                    <h5 class="panel-title"><i class="fa" aria-hidden="true"></i>
                                        Today's percentage of total deaths:  <span class="gNumber">{{ info.data.todayPerCentOfTotalDeaths }}% </span><br>
                                    </h5> <hr class="new4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                info: [],
            }
        },
        mounted(){
            axios.get('http://localhost:9080/total')
            .then(response => (this.info = response))
            .catch(function (error) {   
                console.log(error);
            });
        }

    }

</script>

<style scoped>
.gNumber {
  color: #42b983;
  font-weight: bold;
}
</style>