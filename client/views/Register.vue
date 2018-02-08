<template>
      <div class="page">
            <h1>REGISTER</h1>
            <h1> Register </h1>
            <input type="email" name="email" v-model="email" placeholder="email"/>
            <input type="password" name="password" v-model="password" placeholder="password"/>
            <br>
            
            <button @click="register"> Register </button>
            <button> 
                  <router-link to="/home"> Home </router-link>
            </button>
      </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default{
      data () {
            return {
                  email: 'abc',
                  password: '123',
                  error: null
            }
      },
      methods:{
            async register () {
                 try {
                  const response = await AuthenticationService.register({
                         email: this.email,
                         password: this.password
                  })
                  console.log(response.data)
                 }
                 catch (error){
                      this.error = error.response.data.error
                      console.log("yep,error")
                      console.log(this.error)
                 }
            }
      }
}
</script>