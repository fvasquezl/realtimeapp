<template>
    <v-card class="mx-auto mt-2" color="#fffff" outlined>
        <v-card-title>
            <div>
                <div class="title">{{data.title}}</div>
                <span class="font-weight-light">{{data.user}} said {{data.created_at}}</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal">5 Replies</v-btn>
        </v-card-title>

        <v-card-text v-html="data.body"></v-card-text>
    </v-card>

</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style scoped>

</style>
