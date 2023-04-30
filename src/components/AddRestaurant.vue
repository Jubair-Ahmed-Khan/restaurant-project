<template>
    <h3>Add Restaurant</h3>
    <form action="" class="add">
        <input type="text" placeholder="Enter Name" name="name" v-model="restaurant.name">
        <input type="text" placeholder="Enter Address" name="address" v-model="restaurant.address">
        <input type="text" placeholder="Enter Contact" name="contact" v-model="restaurant.contact">
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: "AddRestaurant",
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
        async addRestaurant() {
            // console.log(this.restaurant)
            let result = await axios.post("http://localhost:3000/restaurants", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })

            console.log(result);

            if (result.status == 201) {
                this.$router.push({ name: 'HomePage' })

            }
        }
    }
}
</script>
<style></style>