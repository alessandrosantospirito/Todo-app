<template>
    <div>
        <v-card>
            <v-layout>
                <v-flex>
                    <input v-model="name">
                </v-flex>
                <v-layout>
                    <v-flex >
                        <v-checkbox
                            v-model="isFinished"
                            v-on:change="editTask">
                        </v-checkbox>
                    </v-flex>
                    <v-flex>
                        <button v-on:click="editTask">
                            <v-icon>
                                edit
                            </v-icon>
                        </button>
                    </v-flex>
                    <v-flex>
                        <button v-on:click="deleteTask">
                            <v-icon>
                                delete
                            </v-icon>
                        </button>
                    </v-flex>
                </v-layout>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from "vuex"

    export default {
        props: ["task"],
        data() {
            return {
                uuid: this.task.uuid,
                name: this.task.name,
                listNumber: this.task.listNumber,
                isFinished: this.task.isFinished,
            }
        },
        methods: {
            ...mapActions("tasks", ["changeTask"]),
            ...mapMutations("tasks", ["removeTask"]),
            editTask() {
                this.changeTask(this.selectedTask)
            },
            deleteTask() {
                this.removeTask(this.selectedTask)
            }
        },
        computed: {
            selectedTask() {
                return {name: this.name, isFinished: this.isFinished, uuid: this.uuid, listNumber: this.listNumber}
            }
        }
    }
</script>