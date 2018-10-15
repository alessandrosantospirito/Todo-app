<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex>
          <create-task v-for="(list, key) in items" 
            :key="key" :listUuid="key" :items="list" :allTasksVisible="allTasksVisible">
          </create-task>
        </v-flex>
        <v-flex>
          <v-checkbox v-model="allTasksVisible" label="Show finished Tasks">
          </v-checkbox>
        </v-flex>
        <v-flex>
          <button v-on:click="add">
              <v-icon>
                  add
              </v-icon>
          </button>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import createTask from "./modules/tasks/components/createTask.vue"

const uuidv4 = require("uuid/v4") 

import { mapState, mapMutations } from "vuex"

export default {
  name: 'App',
  data() {
    return {
      allTasksVisible: false,
    }
  },
  components: {
    createTask
  },
  computed: {
    ...mapState("tasks", ["items"]),
  },
  methods: {
    ...mapMutations("tasks", ["addList"]),
    add() {
      this.addList(uuidv4())
    }
  }
}
</script>
