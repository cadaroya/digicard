<template>
     <div class="page">
          <h1> Home Page </h1>
               <button> 
                    <router-link to="/reports"> Reports </router-link>
               </button>
          <p> Search a student. </p>
          <!-- <search-bar @foundStud="goToStud($event)"></search-bar> -->
          <search-bar></search-bar>
     </div>
</template>

<script>
     import SearchBar from 'components/SearchBar'
     export default {
          components: {
               SearchBar
          }
          /*,
          methods: {
               goToStud(stud) {
                    this.$router.push('/student/' + stud.sno)
               }
          }
          */
     }
</script>

