<template>
	<div id = "addstudent-wrapper">
		Student Number:<br>
		<input v-model="sno" placeholder="Enter Student Number"><br><br>
		Last Name:<br>
		<input v-model="last_name" placeholder="Enter Last Name"><br><br>
		First Name:<br>
		<input v-model="first_name" placeholder="Enter First Name"><br><br>
		Middle Name:<br>
		<input v-model="middle_name" placeholder="Enter Middle Name"><br><br>
		College:<br>
		{{college}}<br><br>
		Course:<br>
			<select v-model="course" style="min-width:20%">
				<option v-for="option in courses" v-bind:value="option">
					{{option}}
				</option>
			</select>
			<br><br>
		Preferred OS:<br>
			<input type="radio" value="Windows" v-model="preferred_os"> Windows <br>
			<input type="radio" value="Mac" v-model="preferred_os"> Mac <br><br>
		<button v-on:click="addStudent"> Add Student </button>
		<!--
			{{sno}}
			{{last_name}}
			{{first_name}}
			{{middle_name}}
			{{course}}
			{{college}}
			{{preferred_os}}
		-->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				sno: '',
				last_name: '',
				first_name: '',
				middle_name: '',
				course: '',
				college: 'Engineering',
				preferred_os: '',
				courses: [ 'BS Chemical Engineering',
						'BS Civil Engineering',
						'BS Computer Engineering',
						'BS Computer Science',
						'BS Electrical Engineering',
						'BS Electronics and Communications Engineering',
						'BS Geodetic Engineering',
						'BS Industrial Engineering',
						'BS Materials Engineering',
						'BS Mechanical Engineering',
						'BS Metallurgical Engineering',
						'BS Mining Engineering'
					]
			}
		},
		methods: {
			async addStudent(){
				console.log("backend na ata toh hahaha")
			} 
		}
	}
</script>

<style scoped>
	#addstudent-wrapper {
		text-align: center;
	}
</style>