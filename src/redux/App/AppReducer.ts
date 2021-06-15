import { AppActions } from '../../TypeScript/Actions/actionsTypes'
import { IInitializedSuccess } from '../../TypeScript/Interfaces/appInterface';
import { AppActionsTypes, AppThunk } from '../../TypeScript/Types';

const initialState = {
    initialized: false
};

type InitialState = typeof initialState;

const appReducer = (state = initialState, action: AppActionsTypes): InitialState => {
    switch(action.type) {
        case AppActions.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
             return state
    }
}
//action creator
export const initializedSuccess = (): IInitializedSuccess => ({
    type: AppActions.INITIALIZED_SUCCESS})
//thunk creator
export const initializeApp = (): AppThunk => async dispatch => {
    dispatch(initializedSuccess())
}

export default appReducer