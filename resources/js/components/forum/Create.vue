<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                label="Title"
                v-model="form.title"
                type="text"
                required
            ></v-text-field>
            <span v-if="errors.title" class="red--text">{{
                errors.title[0]
            }}</span>

            <v-autocomplete
                v-model="form.category_id"
                :items="categories"
                item-text="name"
                item-value="id"
                dense
                label="Category"
            ></v-autocomplete>

            <span v-if="errors.title" class="red--text">{{
                errors.title[0]
            }}</span>

            <vue-simplemde v-model="form.body" />
            <span v-if="errors.title" class="red--text">{{
                errors.title[0]
            }}</span>

            <div>
                <v-btn color="success" type="submit" :disabled="disabled">
                    Create
                </v-btn>
            </div>
        </v-form>
    </v-container>
</template>

<script>
import VueSimplemde from "vue-simplemde";
export default {
    components: {
        VueSimplemde
    },
    data() {
        return {
            form: {
                title: null,
                category_id: null,
                body: null
            },
            categories: [],
            errors: {}
        };
    },
    created() {
        axios
            .get("/api/category")
            .then(res => (this.categories = res.data.data))
            .catch(error => console.log(error.response.data));
    },
    methods: {
        create() {
            axios
                .post("/api/question", this.form)
                .then(res => this.$router.push(res.data.path))
                .catch(error => (this.errors = error.response.data.errors));
        }
    },
    computed: {
        disabled() {
            return !(this.form.title && this.form.body && this.form.category_id)
        }
    }
};
</script>

<style scoped></style>
