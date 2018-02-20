<template>
     <div class='changecredits-wrapper'>
          <input v-model="amountdue" placeholder="Type the amount here"/>
          <br>
          <button v-on:click="changeamountdue"> Change Amount Due </button>
     </div>
</template>

<script>
     import ReportService from '../services/ReportService'
     export default {
          data: function() {
               return {
                    //report: this.report,
                    amountdue: this.report.amountdue
               }
          },
          methods: {
               async changeamountdue() {     
                    console.log(this.amountdue)
               }
          },
          props: ['report']
     }
</script>

<style scoped>
</style>