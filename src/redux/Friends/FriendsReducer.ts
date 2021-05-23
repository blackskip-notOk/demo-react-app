const initialState = {};

export type InitialStateType = typeof initialState
const friendsReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default friendsReducer;