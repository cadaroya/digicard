<!--
     10 Apr 2018 created file
     10 Apr 2018 made filterbar
     10 Apr 2018 updated filterbar
-->

<template>
     <div id='filterbar-wrapper'>
          <span v-if="isOpen===false">
               <span style="cursor:pointer" v-on:click="openBar()">&#9661; Filter</span>
          </span>
          <div id='filterbar'>
               <span v-if="isOpen===true">
                    <span style="cursor:pointer" v-on:click="closeBar()">&#9651; Close</span>
                    <div class = "objects">
                         <div class = "left">
                              Sort by:<br>
                              <input   
                                   type="radio"
                                   id="sortByAll"
                                   value="sortByAll"
                                   v-model="picked"
                                   v-on:change="sortByAll()">
                                   sortByAll
                              </input><br>
                              <input    
                                   type="radio"
                                   id="sortByRecent"
                                   value="sortByRecent"
                                   v-model="picked"
                                   v-on:change="sortByRecent()">
                                   sortByRecent
                              </input><br>
                              <input
                                   type="radio"
                                   id="sortByDate"
                                   value="sortByDate"
                                   v-model="picked"
                                   v-on:change="sortByDate()">
                                   sortByDate
                              </input>
                              <!--<br>
                              <br><br>
                              <button> Submit </button>-->
                         </div>
                         <div class = "right">
                              Start date:
                              <datepicker
                                   :value="startdate"
                                   format="dd MMM yyyy"
                                   @selected="function1()">                                   
                              </datepicker>
                              <br>
                              End date:
                              <datepicker
                                   :value="enddate"
                                   format="dd MMM yyyy">
                              </datepicker>
                              <br>
                              
                         </div>
                    </div>
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
                    reports: '',
                    isOpen: false,
                    picked: null,
                    startdate: null,
                    enddate: null
               }
          },
          components: {
               Datepicker
          },
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
               async function1() {
                    console.log("HELLO STARTDATE")
                    console.log(this.startdate)
                    this.enddate = this.startdate
               },

               async function2() {
                    await console.log(this.picked)
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
                    updateParent()
               },
               async sortByRecent(){
                    // Update Stuff
                    this.reports = (await ReportService.sortBy({
                         option: "recent",
                         date: null
                    })).data
                    console.log(this.reports)
                    updateParent()
               },
               async sortByDate(){
                    // Update Stuff
                    var sdate = this.startdate
                    this.reports = (await ReportService.sortBy({
                         option: "date",
                         date: sdate
                    })).data
                    console.log(this.reports)
                    updateParent()
               },
               updateParent() {
                    returnreport = this.reports
                    this.$emit(returnreport);
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
          min-height: 25vh;
          background-color: lightblue;
          padding-top: 2%;
          padding-bottom: 2%;
          padding-left: 5%;
          padding-right: 5%;
     }
     #filterbar .objects .left {
          float: left;
          width: 50%;
     }
     #filterbar .objects .right {
          float: right;
          width: 50%;
     }

</style>