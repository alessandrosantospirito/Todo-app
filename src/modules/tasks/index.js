import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

const module = {
    namespaced: true,
    state: {
        items: [
            { name:"Finish todo-app", isFinished: false, uuid: "b766c7c6-7d30-4f17-bc06-40876e7d08b9" },
            { name:"Start the project", isFinished: true, uuid: "42dc6c3c-778e-41ba-9415-fb29f5a60cfe" }
        ]
    },
    getters,
    mutations,
    actions,

}

export default module