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
                this.$router.push('/student');
                const response = await StudentService.index({
                    sno: this.searchStr
                }, this.searchStr)
                console.log(response)
            } catch(error){
                console.log(error)
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