<template>
     <div class = "page">
         <div title="Reports">
            <h1>REPORTS</h1>
                <div
                    v-for="report in reports"
                    :key="report.rid">
                  <h4> Report ID:  {{report.rid}} <br> </h4>
                  <h4> StudentNo:  {{report.sno}}  <br></h4>
                  <h4> Freehours: {{report.freehours}}  <br></h4>
                  <h4> Timein:  {{report.timein}}  <br></h4>
                  <h4> Timeout: {{report.timeout}}  <br></h4>
                 <h4> Amount Due: 
                    <input v-model="report.amountdue" placeholder="Type the amount here" />
                  </h4>
                   <h4> SeatNo:  {{report.seatno}}  <br></h4>

                </div>
                

            <button> 
                <router-link to="/home"> Home </router-link>
            </button>  
         </div>
     </div>
</template>

<script>
import ReportService from '../services/ReportService'
import AuthenticationService from '../services/AuthenticationService'
export default{
    data () {
        return {
           // hoursDisp: this.reports.amountdue,
            reports: null
        }
    },
    // The moment it's mounted, you do a request for all the reports
    async mounted () {
       try{
           this.reports = (await ReportService.index()).data
       } catch (error) {
           console.error(error)
       }
    }
}
</script>
