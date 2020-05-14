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
                <v-card class="pa-2" outlined tile>
                    .col-6 .col-md-4
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import question from "./question";

    export default {
        components: {
            question
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
