<!--
     10 Apr 2018 created file
     10 Apr 2018 made filterbar
-->

<template>
     <div id='filterbar-wrapper'>
          <span v-if="isOpen===false">
               <span style="cursor:pointer" v-on:click="openBar()">&#9661; Filter</span>
          </span>
          <div id='filterbar'>
               <span v-if="isOpen===true">
                    <div class = "objects">
                         Start date: <datepicker format="dd MMM yyyy" @selected=""></datepicker>
                         <br>
                         End date: <datepicker format="dd MMM yyyy"></datepicker>
                         <button> Submit </button>
                    </div>
                    <span style="cursor:pointer" v-on:click="closeBar()">&#9651; Close</span>
               </span>
          </div>
     </div>
</template>

<script>
     import ReportService from '../services/ReportService'
     import Datepicker from 'vuejs-datepicker'

     export default {
          data: function() {
               return {
                    isOpen: false
               }
          },
          components: {
               Datepicker
          },
          props : ['reports'],
          methods: {
               async openBar() {
                    document.getElementById("filterbar-wrapper").style.paddingBottom = "1%";
                    document.getElementById("filterbar").style.height = "25%";
                    this.isOpen = true;
                    /*console.log(this.isOpen)*/
               },
               async closeBar() {
                    document.getElementById("filterbar-wrapper").style.paddingBottom = "0";
                    document.getElementById("filterbar").style.height = "0";
                    this.isOpen = false;
                    /*console.log(this.isOpen)*/
               },

               /* sorting stuff */
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
          z-index: 1;
          padding-left: 10%;
          padding-right: 10%;
          
     }
     #filterbar {
          height: 0;
          width: 100%;
          z-index: 1;
          /*overflow-x: hidden;*/
          transition: 1s;
     }
     #filterbar .objects {
          background-color: lightblue;
          padding-top: 2%;
          padding-bottom: 2%;
          padding-left: 5%;
     }
</style>