import { FIND_USER } from "../../TypeScript/Actions/actionsTypes";

const initialState = {name: ''};

export type InitialStateType = typeof initialState

const findUserReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case FIND_USER:
            return {
                ...state,
                name: action.name
            }
        default:
             return state;
    }
}

type FindUserActionType = {
    type: typeof FIND_USER
    name: string
}
export const findUser = (name: string) => ({type: FIND_USER, name})

export default findUserReducer;