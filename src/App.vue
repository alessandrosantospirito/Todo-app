<template>
  <v-app>
    <v-container>
      <v-layout>
        <create-task v-for="(list, key) in tasksByList" :key="key" :list-number="key" :items="list">
        </create-task>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import createTask from "./modules/tasks/components/createTask.vue"
import _ from "lodash"

import { mapState } from "vuex"

export default {
  name: 'App',
  components: {
    createTask
  },
  computed: {
    ...mapState("tasks", ["items"]),
    tasksByList() {
      return _.groupBy(this.items, task => task.listNumber)
    },
  }
}
</script>
