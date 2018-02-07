<template>

  <div class="page">
    <h1>HOME</h1>
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save!!!.
    </p>

    <button> 
      <router-link to="/register">
       Register 
      </router-link>
    </button>
    <button>
    <router-link to="/reports">
        Reports
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