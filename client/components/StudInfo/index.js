import style from './style.css'

export default {
     props: ['studNo'],
     data: function() {
          return {
               lastName: 'placeholderLast',
               firstName: 'mcplaceholderyFirst',
               college: 'engg boiz',
               isValidated: 'pffft validation'
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
                         </table>
                    </div>
               </div>
          )
     }
}