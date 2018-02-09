import style from './style.css'
import StudentService from '../../services/StudentService'

export default {
     data: function() {
          return {
               searchStr: ''
          }
     },
     methods: {
          async goToStudent() {
            try {
                //this.$router.push('/student/' + this.searchStr);
                // this.$router.push('/student');
                const response = (await StudentService.index({
                    search: this.searchStr
                }, this.searchStr)).data
                console.log(response)
                // You can call stud.sno, stud.first_name, etc
                const stud = response[0][0]
                const log = response[1]

                console.log(stud)
                console.log(log)
                
            } catch(error){
                // console.log(error)
                console.log("An error occurred when searching the student " + this.searchStr + ". Please try again.")
            }
               
          }
     },
     render(h) {
          return (
               <div class='searchbar-wrapper'>
                    <div class={style.searchbar}>
                         <input v-model={this.searchStr} placeholder="Type the student number here" />
                         <p> Looking for: {this.searchStr} </p>
                         <button on-click={this.goToStudent} > Search </button>
                    </div>
            </div>
        )
    }
}