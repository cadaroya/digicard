<template>
     <div class="page">
          <h1> Home Page </h1>
            <button> 
                  <router-link to="/reports"> Reports </router-link>
            </button>
          <p> Search a student. </p>
          <search-bar></search-bar>
     </div>
</template>

<script>
    import SearchBar from 'components/SearchBar'
    export default {
        components: {
            SearchBar
        }
    }
</script>

