//A mutation is simply the modification of a state value
export default {
    removeTask(state, taskToRemove){
        let taskIndex = state.items.findIndex(task => task.uuid === taskToRemove.uuid)

        state.items.splice(taskIndex, 1);
    },
    addTask(state, newTask) {
        state.items.push(newTask) 
    },
}