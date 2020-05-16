<template>
    <v-container fluid grid-list-md>
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="8">
                <question v-for="question in questions"
                          :key="question.path"
                          :data=question>
                </question>
            </v-col>
            <v-col cols="6" md="4">
                <app-sidebar></app-sidebar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import question from "./question";
    import AppSidebar from "./Sidebar"
    export default {
        components: {
            question,AppSidebar
        },
        data() {
            return {
                questions: {}
            }
        },
        created() {
            axios.get('/api/question')
                .then(res => this.questions = res.data.data)
                .catch(error => console.log(error.response.data))
        }

    }
</script>


<style scoped>

</style>
