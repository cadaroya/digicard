<template>
     <div class = "page">
         <div title="Reports">
            <h1>REPORTS</h1>
                <div
                    v-for="report in reports"
                    :key="report.rid">
                    {{report.rid}}
                    {{report.sno}}
                    {{report.freehours}}
                    {{report.timein}}
                    {{report.timeout}}
                    {{report.amountdue}}
                    {{report.seatno}}

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
            reports: null
        }
    },
    // The moment it's mounted, you do a request for all the reports
    async mounted () {
       
            this.reports = (await ReportService.index()).data
        
        
    }
}
</script>
