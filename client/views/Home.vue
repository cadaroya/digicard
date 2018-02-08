<template>
     <div class="page">
          <h1> Home Page </h1>
          <p> Search a student. </p>
          <search-bar></search-bar>
     </div>
</template>

<script>
    import SearchBar from 'components/SearchBar'
    export default {
        components: { SearchBar }
    }
</script>