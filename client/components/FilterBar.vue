<template>
     <div id='filterbar-wrapper'>
          <datepicker format="dd MM yyyy"></datepicker>
          HELLO
     </div>
</template>

<script>
     import ReportService from '../services/ReportService'
     import Datepicker from 'vuejs-datepicker'

     export default {
          data: function() {
               return {
                    reports: null
               }
          },
          components: {
               Datepicker
          },
          methods: {
               async sortByAll(){
                    // Update Stuff
                    console.log("hello")
                    this.reports = (await ReportService.sortBy({
                         option: "all",
                         date: null
                    })).data
                    console.log(this.reports)
               },
               async sortByRecent(){
                    // Update Stuff
                    this.reports = (await ReportService.sortBy({
                         option: "recent",
                         date: null
                    })).data
               },
               async sortByDate(){
                    // Update Stuff
                    var sdate = null
                    this.reports = (await ReportService.sortBy({
                         option: "date",
                         date: sdate
                    })).data
               }
          }
     }
</script>

<style scoped>
     #filterbar-wrapper {
     }

     #filterbar-wrapper button {
     }

     #filterbar-wrapper button:hover {
     }

     #filterbar-wrapper input {
     }
     
     #filterbar-wrapper ::placeholder{
     }
</style>