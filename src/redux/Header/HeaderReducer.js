import { TOGGLE_IS_VISIBLE } from '../Actions/actionsTypes';

const initialState = {
    isVisible: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isVisible
            };
        default: return state;
    }
}
//action creator
export const toggleVisibility = (isVisible) => ({
        type: TOGGLE_IS_VISIBLE, isVisible});

export default headerReducer;