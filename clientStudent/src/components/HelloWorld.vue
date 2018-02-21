<template>
  <div>
    <h1> TimeIn </h1>

    <input type="text" name="studNo" v-model="studNo" placeholder="studNo" />
    <br>
    <button @click="timein"> TimeIn/TimeOut </button>
    <span v-if="studReturned"><stud-info :studObj="studReturned"></stud-info></span>

  </div>

</template>

<script>
import StudInfo from './StudInfo.vue'
import TimeInService from '../services/TimeInService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      studNo: '201507397',
      studReturned: null
    }
  },
  components: { StudInfo },
  methods: {
    async timein () {
      const response = await TimeInService.timein({
        studNo: this.studNo
      })
      console.log(response.data)
      this.studReturned = response.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
