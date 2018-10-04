<template>
  <div>
    <v-icon>
      home
    </v-icon>
    <create-task>
    </create-task>
  </div>
</template>

<script>
import createTask from "./modules/tasks/components/createTask.vue"

export default {
  name: 'App',
  components: {
    createTask
  }
}
</script>
