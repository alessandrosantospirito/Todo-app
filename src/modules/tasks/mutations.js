import Vue from "vue"

export default {
    removeTask(state, taskObject){
        let listUuid = taskObject.listUuid

        let taskIndex = state.items[listUuid].findIndex(task => task.taskUuid === taskObject.task.taskUuid)

        state.items[listUuid].splice(taskIndex, 1);
    },
    addTask(state, newTask) {
        state.items[newTask.listUuid].push(newTask.task) 
    },
    addList(state, listUuid) {
        Vue.set(state.items, listUuid, []) 
    },
    removeList(state, listUuid) {
        delete state.items[listUuid]
        //the values of state.items wont update, unless I initialise them again
        state.items = {...state.items}
    }
}