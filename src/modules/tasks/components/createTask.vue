<template>
    <v-app>
        <v-container>
        {{ items }}
            <v-flex xs8>
                <v-card>
                    <v-card-text>
                        <v-layout row>
                            <input v-model="currentText">
                            <v-flex>
                                <button v-on:click="createTask">
                                    <v-icon>
                                        add_box
                                    </v-icon>
                                </button>
                            </v-flex>
                            <v-flex>
                                <button v-on:click="deleteList">
                                    <v-icon>
                                        delete
                                    </v-icon>
                                </button>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                <editable-task v-for="task in configuredList" :key="task.taskUuid" :list-uuid="listUuid" :task="task">
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
            "listUuid",
            "allTasksVisible"
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
            configuredList() {
                let sortedTasks = this.sortedTasks

                if(this.allTasksVisible) {
                    return sortedTasks
                }
                return _.filter(sortedTasks, (task) => task.isFinished === false)
            }
        },
        methods: {
            ...mapMutations("tasks", ["addTask", "removeList"]),
            createTask: function() {
                this.addTask({listUuid: this.listUuid, task: {name: this.currentText, isFinished: false, taskUuid: uuidv4()}}),
                this.clear()
            },
            deleteList: function() {
                this.removeList(this.listUuid)
            },
            clear: function() {
                this.currentText = ""
            }
        }
    }
</script>