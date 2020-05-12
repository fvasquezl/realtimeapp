<template>
    <v-toolbar extended>
        <v-toolbar-title>Fvasquez App</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <v-btn text>Forum</v-btn>
            <v-btn text>Ask Questions</v-btn>
            <router-link to="/login">
                <v-btn text>Login</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
