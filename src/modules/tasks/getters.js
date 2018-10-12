const _ = require("lodash")

export default {
    getByUnfinished: state => {
        return state.items.filter(todo => todo.isFinished === false)
    },
    getTask: 
        state => taskToFind => {
            return _.find(state.items, task => task.uuid === taskToFind.uuid)
        }
}