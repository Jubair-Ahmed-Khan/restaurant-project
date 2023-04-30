<template>
    <NavBar />
    <h3>Home page</h3>
</template>
<script>
import NavBar from './NavBar.vue'
export default {
    name: "HomePage",
    components: {
        NavBar
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>
<style scoped></style>