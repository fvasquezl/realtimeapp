<template>
    <v-container>
        <v-form @submit.prevent="submit">
            <v-text-field
                label="Category Name"
                v-model="form.name"
                type="text"
                required
            ></v-text-field>

            <span v-if="errors.name" class="red--text">{{
                errors.name[0]
            }}</span>

            <div>
                <v-btn
                    color="pink"
                    :disabled="disabled"
                    type="submit"
                    v-if="editSlug"
                    >Create</v-btn
                >
                <v-btn color="teal" :disabled="disabled" type="submit" v-else
                    >Create</v-btn
                >
            </div>
        </v-form>
        <v-card class="mt-4">
            <v-toolbar color="light-blue" dark>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <div v-for="(category, index) in categories" :key="category.id">
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-btn icon @click="edit(index)">
                                <v-icon color="orange">mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title
                                v-text="category.name"
                            ></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon @click="destroy(category.slug, index)">
                                <v-icon color="red">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null
            },
            categories: {},
            editSlug: null,
            errors: {}
        };
    },
    created() {
        if (!User.admin()) {
            this.$router.push("/forum");
        }
        axios
            .get("/api/category")
            .then(res => (this.categories = res.data.data))
            .catch(error => console.log(error.response.data));
    },
    computed: {
        disabled() {
            return !this.form.name
        }
    },
    methods: {
        submit() {
            this.editSlug ? this.update() : this.create();
        },
        create() {
            axios
                .post("/api/category", this.form)
                .then(res => {
                    this.categories.unshift(res.data);
                    this.form.name = null;
                })
                .catch(error => (this.errors = error.response.data.errors));
        },
        update() {
            axios
                .patch(`/api/category/${this.editSlug}`, this.form)
                .then(res => {
                    this.categories.unshift(res.data);
                    this.form.name = null;
                    this.editSlug = null;
                })
                .catch(error => (this.errors = error.response.data.errors));
        },
        destroy(slug, index) {
            axios
                .delete(`/api/category/${slug}`)
                .then(res => this.categories.splice(index, 1));
        },
        edit(index) {
            this.form.name = this.categories[index].name;
            this.editSlug = this.categories[index].slug;
            this.categories.splice(index, 1);
        }
    }
};
</script>

<style scoped></style>
