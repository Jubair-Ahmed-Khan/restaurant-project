<template>
    <img class="logo" src="../assets/resto-logo.jpg" alt="restaurant-logo" />
    <h3 class="text-danger">Login</h3>
    <div class="login">
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Not a member yet?</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "LogIn",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            // alert('Login clicked')
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            console.log(result);

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'HomePage' })

            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
}
</script>
<style scoped></style>