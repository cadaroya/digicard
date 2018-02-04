<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save!!!.
    </p>

    <button> 
      <router-link to="/register">
       Register 
      </router-link>
    </button>
  </div>
</template>

<script>
import Counter from 'components/Counter'
export default {
  components: {
    Counter
  }
}
</script>