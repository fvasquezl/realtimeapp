<template>
    <div class="mt-4">
        <vue-simplemde v-model="body" />
        <v-btn color="green" dark @click="submit">
            Reply
        </v-btn>
    </div>
</template>

<script>
    import VueSimplemde from "vue-simplemde";

    export default {
        props:['questionSlug'],

        components: {
            VueSimplemde
        },
        data(){
            return {
                body:null
            }
        },
        methods:{
            submit(){
                axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
                .then(res=>{
                    this.body = ''
                    EventBus.$emit('newReply',res.data.reply)
                    window.scrollTo(0,0)
                })
            }
        }
    }
</script>

<style scoped>

</style>
