<template>
	<div id="see-seats-wrapper">
		<div class = "computer-wrapper">
			<div v-for="seat in seats">
				<div v-if="seat === 0">
	  				<div class = "computer unavailable">
						X <br>
						{{seat}}
					</div>
				</div>
				<div v-else-if="seat <= 30">
					<div class = "computer mac">
						Mac <br>
						{{seat}}
					</div>
				</div>
				<div v-else-if="seat > 30">
	  				<div class = "computer windows">
						Windows <br>
						{{seat}}
					</div>
				</div>
			</div>
		</div>
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
#see-seats-wrapper .computer-wrapper {
	padding-top: 20px;
}

#see-seats-wrapper .computer {
	font-size: 20px;
	text-align: center;
	display:inline-block;
	padding-top: 5px;
	position: relative;
	margin: 5px;
	float:left;
  	width: 110px;
    	height: 50px;
    	border: 1px solid black;
}

#see-seats-wrapper .computer.windows {
    	background-color: lightblue;
}
#see-seats-wrapper .computer.mac {
    	background-color: white; 
}
#see-seats-wrapper .computer.unavailable {
    	background-color: #DC143C; 
}
</style>