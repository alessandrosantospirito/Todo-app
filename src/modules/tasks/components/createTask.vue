<template>
    <v-app>
        <v-container>
        {{ items }}
            <v-flex xs5>
                <v-card>
                    <v-card-text>
                        <input v-model="currentText">
                        <button v-on:click="createTask">
                            <v-icon>
                                add
                            </v-icon>
                        </button>
                    </v-card-text>
                <editable-task v-for="task in sortedTasks" :key="task.uuid" :task="task">
                </editable-task>
                </v-card>
            </v-flex>
        </v-container>
    </v-app>
</template>

<script>
    import editableTask from "./editableTask.vue"
    import { mapState, mapGetters, mapMutations } from "vuex";
    
    const _ = require("lodash")
    const uuidv4 = require("uuid/v4") 
    
    export default {
        props: [
            "items",
            "listNumber"
        ],
        components: {
            editableTask
        },
        data() {
            return {
                currentText: "",
            }
        },
        computed: {
            sortedTasks() {
                return _.sortBy(this.items, task => task.name)
            },
        },
        methods: {
            ...mapMutations("tasks", ["addTask"]),
            createTask: function() {
                this.addTask({name: this.currentText, isFinished: false, uuid: uuidv4(), listNumber: this.listNumber}),
                this.clear()
            },
            clear: function() {
                this.currentText = ""
            }
        }
    }
</script>