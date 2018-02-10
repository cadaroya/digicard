<template>
     <div>
          <button><router-link to='/home'> (back to home) </router-link></button>
          <h1> Some Student's Page </h1>
          <p> His student number is {{ $route.params.studNo }} </p>
          <stud-info :studObj="stud"></stud-info>
          <stud-log :studNo="$route.params.studNo"></stud-log>

          <!-- Removing below line breaks everything and I don't know why (sorry) -->
          <div><p> Panglan: {{ stud.first_name }} </p></div>
     </div>
</template>

<script>
     import StudInfo from 'components/StudInfo'
     import StudLog from 'components/StudLog.vue'
     import StudentService from '../services/StudentService'

     export default {
          data() {
               return {
                    stud: null,
                    log: null,
                    searchStr: null
               }
          },
          components: { StudInfo, StudLog },
          methods: {
               async loadStudent() {
                    try {
                         this.searchStr = this.$route.params.studNo

                         //this.$router.push('/student/' + this.searchStr);
                         // this.$router.push('/student');
                         const response = (await StudentService.index({
                             search: this.searchStr
                         }, this.searchStr)).data
                         console.log(response)

                         // You can call stud.sno, stud.first_name, etc
                         this.stud = response[0][0]
                         // this.log = response[1]

                         console.log('hello')
                         console.log(this.stud.first_name)
                         // console.log(this.log)

                         // console.log('sending stud')
                         // this.$emit('foundStud', stud)
                    } catch(error){
                         // console.log(error)
                         console.log("An error occurred when searching the student " + this.searchStr + ". Please try again.")
                    }
               }
          },
          async mounted () {
               try{
                    this.loadStudent()
               } catch (error) {
                    console.error(error)
               }
          }
     }
</script>