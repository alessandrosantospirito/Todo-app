import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

const module = {
    namespaced: true,
    state: {
        items: {
                "5f32a32e-b450-489e-b6d6-dcf3dc0abc45": [{ name:"Finish todo-app", isFinished: false, taskUuid: "b766c7c6-7d30-4f17-bc06-40876e7d08b9" }],
                "b4dade5e-f22a-4702-9c25-b875529ebed4": [{ name:"Start the project", isFinished: true, taskUuid: "42dc6c3c-778e-41ba-9415-fb29f5a60cfe"}],
        } 
    },
    getters,
    mutations,
    actions,

}

export default module