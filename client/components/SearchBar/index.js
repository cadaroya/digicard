import style from './style.css'

export default {
     data: function() {
          return {
               searchStr: ''
          }
     },
     methods: {
          goToStudent() {
               this.$router.push('/student/' + this.searchStr);
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