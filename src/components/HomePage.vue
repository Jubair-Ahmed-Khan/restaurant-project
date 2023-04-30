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
            <td>
                <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)" style="margin-start:10px">Delete</button>
            </td>

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
    methods: {
        async deleteRestaurant(id) {
            console.log(id);
            let result = await axios.delete("http://localhost:3000/restaurants/" + id)

            if (result.status == 200) {
                this.loadData()
            }

        },
        async loadData() {
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }

            let result = await axios.get("http://localhost:3000/restaurants")
            // console.log(result);
            this.restaurants = result.data;
        }
    },
    async mounted() {
        this.loadData()
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