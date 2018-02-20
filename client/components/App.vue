<template>
     <div id="app" class="app-wrapper">
          <app-navbar></app-navbar>
          <router-view></router-view>
     </div>
</template>

<script>
     import NavBar from './NavBar.vue'
     export default {
          components: {
               'app-navbar': NavBar
          }
     }
</script>

<style scoped>
</style>