import style from './style.css'

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
     },
     render(h) {
          return (
               <div class='studinfo-wrapper'>
                    <div class={ style.studinfo }>
                         <table>
                              <tr>
                                   <th>STUDENT NUMBER</th>
                                   <td>{ this.studNo }</td>
                              </tr>
                              <tr>
                                   <th>LAST NAME</th>
                                   <td>{ this.lastName }</td>
                              </tr>
                              <tr>
                                   <th>FIRST NAME</th>
                                   <td>{ this.firstName }</td>
                              </tr>
                              <tr>
                                   <th>COLLEGE</th>
                                   <td>{ this.college }</td>
                              </tr>
                              <tr>
                                   <th>VALIDATED</th>
                                   <td>{ this.isValidated }</td>
                              </tr>
                              <tr>
                                   <th>FREE HOURS</th>
                                   <td>{ this.remHours}</td>
                              </tr>
                         </table>
                    </div>
               </div>
          )
     }
}