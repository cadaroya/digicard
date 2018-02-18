import style from './style.css'
import ReportService from '../../services/ReportService'


export default {
     data: function() {
          return {
               report: this.report,
               amountdue: this.report.amountdue
          }
     },
     methods: {
          async changeamountdue() {
               //this will be edited later to pass this.report
               //and this.amountdue to change data in database     
               console.log(this.amountdue)
          }
     },
     props: ['report'],
     render(h) {

          return (
               <div class='changecredits-wrapper'>
                    <div class={style.changecredits}>
                         <input v-model={this.amountdue} placeholder="Type the amount here" />
                         <br/>
                         <button on-click={this.changeamountdue}> Change Amount Due </button>
                    </div>
               </div>
          )
     }
}