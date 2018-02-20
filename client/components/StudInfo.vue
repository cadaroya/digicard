<template>
     <div class='studinfo-wrapper'>
          <table>
               <tr>
                    <th>STUDENT NUMBER</th>
                    <td>{{studNo}}</td>
               </tr>
               <tr>
                    <th>LAST NAME</th>
                    <td>{{lastName}}</td>
               </tr>
               <tr>
                    <th>FIRST NAME</th>
                    <td>{{firstName}}</td>
               </tr>
               <tr>
                    <th>COLLEGE</th>
                    <td>{{college}}</td>
               </tr>
               <tr>
                    <th>VALIDATED</th>
                    <td>{{isValidated}}</td>
               </tr>
               <tr>
                    <th>FREE HOURS</th>
                    <td>{{remHours}}</td>
               </tr>
          </table>
     </div>
</template>

<script>
	export default {
     props: ['studObj'],
     data: function() {
          return {
               studNo: this.studObj.sno,
               lastName: this.studObj.last_name,
               firstName: this.studObj.first_name,
               college: this.studObj.college,
               isValidated: this.studObj.validated,
               remHours: this.studObj.freehours
          }
     }
}
</script>

<style scoped>
</style>