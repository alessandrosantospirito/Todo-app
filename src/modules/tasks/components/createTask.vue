<template>
    <div>
        <v-card>
            <button :click="save">
                <v-icon>
                    save
                </v-icon>
            </button>
            <v-card-title>
                <input v-model="taskHeader">
            </v-card-title>
            <v-card-text>
                <button :click="addTask()">
                    <v-icon>
                        add
                    </v-icon>
                </button>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    const uuidv5 = require("uuid/v5")
    export default {
        data() {
            return {
                taskHeader: "",
                currentText: "",
                tasks: []
            }
        },
        methods: {
            save: function() {
            },
            addTask: function() {
            }
        }
    }
</script>