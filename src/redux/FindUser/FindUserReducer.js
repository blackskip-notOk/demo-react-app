import { FIND_USER } from "../Actions/actionsTypes";

let initialState = {name: ''};

const findUserReducer = (state = initialState, action) => {
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

export const findUser = (name) => ({type: FIND_USER, name});

export default findUserReducer;