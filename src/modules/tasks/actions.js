//Action is the additional logic component to a mutation
export default {
    changeTask(context, taskToModify) {
        context.commit("removeTask", taskToModify);
        context.commit("addTask", taskToModify)
    },
}