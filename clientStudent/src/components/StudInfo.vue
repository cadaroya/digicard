<template>
  <div>
    <table>
      <tr>
        <th>STUDENT NUMBER</th>
        <td>{{studNo}}</td>
      </tr>
      <tr>
        <th>LAST NAME</th>
        <td>{{lastName}}</td>
      </tr>
      <tr>
        <th>FIRST NAME</th>
        <td>{{firstName}}</td>
      </tr>
      <tr>
        <th>COLLEGE</th>
        <td>{{college}}</td>
      </tr>
      <tr>
        <th>STATUS</th>
        <td>{{isInSession}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['studObj'],
  data () {
    return {
      studNo: this.studObj.sno,
      lastName: this.studObj.last_name,
      firstName: this.studObj.first_name,
      college: this.studObj.college,
      isInSession: this.studObj.session
    }
  }
}
</script>

<style scoped>
</style>
