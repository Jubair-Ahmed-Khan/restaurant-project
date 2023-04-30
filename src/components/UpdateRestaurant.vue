<template>
    <h3>Update Restaurant</h3>
    <form class="add">
        <input type="text" placeholder="Enter Name" name="name" v-model="restaurant.name">
        <input type="text" placeholder="Enter Address" name="address" v-model="restaurant.address">
        <input type="text" placeholder="Enter Contact" name="contact" v-model="restaurant.contact">
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: "UpdateRestaurant",
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async updateRestaurant() {
            let result = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })

            console.log(result);

            if (result.status == 200) {
                this.$router.push({ name: 'HomePage' })

            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        const result = await axios.get("http://localhost:3000/restaurants/" + this.$route.params.id)
        this.restaurant = result.data
    }
}
</script>
<style></style>