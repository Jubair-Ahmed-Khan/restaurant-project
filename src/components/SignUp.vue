<template>
    <img class="logo" src="../assets/resto-logo.jpg" alt="restaurant-logo" />
    <h3 class="text-danger">Sign Up</h3>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name" />
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            console.log("Signup successful")
            console.log("Name = ", this.name)
            console.log("Email = ", this.email)
            console.log("Password = ", this.password)

            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            })

            console.warn(result);

            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'HomePage' })

            }



            this.name = ""
            this.email = ""
            this.password = ""
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
<style scoped>
.logo {
    width: 150px
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>