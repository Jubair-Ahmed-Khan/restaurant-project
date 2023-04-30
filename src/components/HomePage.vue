<template>
    <h3>{{ name }}'s Home page</h3>

    <h2 style="color:brown">Restaurant List</h2>
    <table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td><router-link :to="'/update-restaurant/' + item.id">Update</router-link></td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios'
export default {
    name: "HomePage",
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        let result = await axios.get("http://localhost:3000/restaurants")
        // console.log(result);
        this.restaurants = result.data;
    }
}
</script>
<style scoped>
table {
    margin: auto;
}

td {
    width: 160px;
    height: 40px;
}
</style>