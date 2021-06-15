export function makeActionCreator(type, ...argsNames) {
    function actionCreator (...args) {
        const action = { type }
        argsNames.forEach((arg, index) => {
            arg = action[argsNames[index] = args[index]]
        })
        return action
    }
    return actionCreator(...argsNames)
}


export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}