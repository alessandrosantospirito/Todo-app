<template>
    <div>
        {{ items }}
        <v-card>
            <button :click="save">
                <v-icon>
                    save
                </v-icon>
            </button>
            <v-card-text>
                <input v-model="currentText">
                <button v-on:click="createTask">
                    <v-icon>
                        add
                    </v-icon>
                </button>
            </v-card-text>
        </v-card>
        <editable-task v-for="task in sortedTasks" :key="task.uuid" :task="task">
        </editable-task>
    </div>
</template>

<script>
    import editableTask from "./editableTask.vue"
    import { mapState, mapGetters, mapMutations } from "vuex";
    
    const _ = require("lodash")
    const uuidv4 = require("uuid/v4") 
    
    export default {
        components: {
            editableTask
        },
        data() {
            return {
                currentText: "",
            }
        },
        computed: {
            ...mapState("tasks", ["items"]),
            ...mapGetters("tasks", ["getByUnfinished"]),
            tasks() {
                return this.items
            },
             sortedTasks() {
                return _.sortBy(this.tasks, task => task.name)
            }
        },
        methods: {
            ...mapMutations("tasks", ["addTask"]),
            save: function() {
            },
            createTask: function() {
                this.addTask({ name: this.currentText, isFinished: false, uuid: uuidv4() }),
                this.clear()
            },
            clear: function() {
                this.currentText = ""
            }
        }
    }
</script>