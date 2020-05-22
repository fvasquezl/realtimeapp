<template>
    <v-card class="mx-auto mt-2" color="#fffff" outlined>
        <v-card-title>
            <div>
                <div class="title">{{ data.title }}</div>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark>{{ replyCount }} Replies</v-btn>
        </v-card-title>

        <v-card-subtitle>
            {{ data.user }} said {{ data.created_at }}
        </v-card-subtitle>
        <v-card-text v-html="body"></v-card-text>

        <v-card-actions v-if="own">
            <v-btn icon small @click="edit">
                <v-icon color="orange">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon small @click="destroy">
                <v-icon color="red">mdi-trash-can</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            own: User.own(this.data.user_id),
            replyCount: this.data.reply_count
        };
    },
    computed: {
        body() {
            return md.parse(this.data.body);
        }
    },
    created() {
        EventBus.$on("newReply", () => {
            this.replyCount++;
        });

        Echo.private("App.User." + User.id()).notification(notification => {
            this.replyCount++;
        });

        EventBus.$on("deleteReply", () => {
            this.replyCount--;
        });
        Echo.channel("deleteReplyChannel").listen("DeleteReplyEvent", e => {
          this.replyCount--;
      });

    },
    methods: {
        destroy() {
            axios
                .delete(`/api/question/${this.data.slug}`)
                .then(res => this.$router.push("/forum"))
                .catch(error => console.log(error.response.data));
        },
        edit() {
            EventBus.$emit("startEditing");
        }
    }
};
</script>

<style scoped></style>
