//Action is the additional logic component to a mutation
export default {
    changeTask(context, taskToModify) {
        let task = context.getters.getTask(taskToModify)

        context.commit("removeTask", task);
        context.commit("addTask", taskToModify)
    },
}