<template>
  <div id="stud-info-wrapper">
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
        <td>
          <p v-if="isInSession" class="active-marker">Active</p>
          <p v-else class="inactive-marker">Inactive</p>
        </td>
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
  #stud-info-wrapper {
    margin: 10px;
    padding: 10px;
  }
  table, th, td {
    padding: 20px 10px;
    border-collapse: collapse;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    text-align: center;
    color: black;
  }
  p.active-marker {
    color: green;
  }
  p.inactive-marker {
    color: grey;
  }
</style>
