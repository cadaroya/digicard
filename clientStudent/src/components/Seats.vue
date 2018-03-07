<template>
     <div id="seats-wrapper">
          <select :value="seat" @change="$emit('update:seat', $event.target.value)">
               <option disabled value="">Please select one</option>
               <option v-for="seat in seats"  v-bind:value="seat">
                    {{seat}}
               </option>
          </select>
     </div>
</template>

<script>
     export default{
          props: ['selected'],
          data () {
               return{
                    seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                         20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],
                    seat: ''
               }
          }
     }
</script>

<style scoped>
     #seats-wrapper .seats-list a {
          color: #e9f1f7;
          background-color: #4179f7;
          float: left;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: lighter;
          font-size: 20px;
          /* Padding value following was essentially trial and error w/ height... */
          padding: 24px 17px;
          text-decoration: none;
     }
     #seats-wrapper .seats-list a:hover {
          background-color: #2660e8
     }
</style>