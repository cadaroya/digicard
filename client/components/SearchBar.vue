<template>
     <div class='searchbar-wrapper'>
     	<div class='searchbar'>
	          <input v-model="searchStr" placeholder="Type the student number here" />
	          <p> Looking for: {{searchStr}} </p>
	          <button v-on:click="goToStudent" > Search </button>
     	</div>
     </div>
</template>


<script>
import StudentService from '../services/StudentService'

export default {
     data: function() {
          return {
               searchStr: ''
          }
     },
     methods: {
          async goToStudent() {
               //try {
                    this.$router.push('/student/' + this.searchStr);

                    /*
                    // this.$router.push('/student');
                    const response = (await StudentService.index({
                              search: this.searchStr
                    }, this.searchStr)).data
                    console.log(response)

                    // You can call stud.sno, stud.first_name, etc
                    const stud = response[0]
                    // const log = response[1]

                    console.log(stud)
                    // console.log(log)

                    console.log('sending stud')
                    this.$emit('foundStud', stud)
                         
               } catch(error){
                    // console.log(error)
                    console.log("An error occurred when searching the student " + this.searchStr + ". Please try again.")
               }
               */  
          }
     }
}
</script>

<style scoped>
.searchbar {
     text-align: center;
     background-color: blue;
}
</style>