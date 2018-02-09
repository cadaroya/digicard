<template>
     <div>
          <table>
          <thead>
               <tr>
                    <th>Date</th>
                    <th>Seat</th>
                    <th>Timein</th>
                    <th>Timeout</th>
                    <th>Free Hours</th>
               </tr>
          </thead>
          <tbody>
               <!-- Key is supposed to be a unique identifier, 
               I just added an arbitrary value to silence the warning. :)
               Replace the value with the primary key once db is set up-->
               <tr v-for="row in log" :key="row.date">
                    <th>{{row.date}}</th>
                    <th>{{row.seat}}</th>
                    <th>{{row.timein}}</th>
                    <th>{{row.timeout}}</th>
                    <th>{{row.freehours}}</th>
               </tr>
          </tbody>
          </table>
     </div>
</template>


<script>
export default{
     props: ['studNo'],
     data: function() {
          return {
               log: null
               /*[
                    {date: '23/11/17', seat: 12, timein: '12:00', timeout: '14:00', freehours: '14:50'},
                    {date: '23/10/17', seat: 14, timein: '10:00', timeout: '11:00', freehours: '15:50'}
               ]*/
          }
     },

    // Stud log
    async mounted () {
       try{
           //this.log = (await ReportService.log()).data
           //console.log(this.log)
       } catch (error) {
           console.error(error)
       }
    }
}
</script>