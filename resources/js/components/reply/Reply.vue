<template>
    <v-card class="mt-4">
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">{{data.user}}</v-list-item-title>
                <v-list-item-subtitle>said {{data.created_at}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <edit-reply
            v-if="editing"
            :reply = data
        ></edit-reply>

        <v-card-text v-else v-html="reply"></v-card-text>

        <v-divider></v-divider>

        <div v-if="!editing">
            <v-card-actions v-if="own">
                <v-btn icon small @click="edit">
                    <v-icon color="orange">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon small @click="destroy">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
    import EditReply from "./EditReply"

    export default {
        props: ['data','index'],
        components:{
            EditReply
        },
        data(){
            return{
                editing:false,
                beforeEditReplyBody:''
            }
        },
        computed: {
            own() {
                return User.own(this.data.user_id)
            },
            reply(){
                return md.parse(this.data.reply)
            }
        },
        created() {
            this.listen()
        },
        methods:{
            edit(){
                this.editing =true;
                this.beforeEditReplyBody = this.data.reply;
            },
            destroy(){
                EventBus.$emit('deleteReply',this.index)
            },
            listen(){
                EventBus.$on('cancelEditing',(reply)=>{
                    this.editing = false
                    if(reply !== this.data.reply){
                        this.data.reply = this.beforeEditReplyBody
                        this.beforeEditReplyBody =''
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
