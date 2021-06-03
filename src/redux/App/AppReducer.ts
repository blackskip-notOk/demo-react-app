import { AppActions } from './../Actions/actionsTypes'
import { getAuthUserData } from "../Auth/AuthReducer"
import { AppDispatch } from '../redux-store';

export type InitialState = {
    initialized: boolean
}

const initialState: InitialState = {
    initialized: false
};

const appReducer = (state = initialState, action: InitializedSuccessAction): InitialState => {
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
type InitializedSuccessAction = {
    readonly type: typeof AppActions.INITIALIZED_SUCCESS
}
//action creator
export const initializedSuccess = (): InitializedSuccessAction => ({
    type: AppActions.INITIALIZED_SUCCESS})
//thunk creator
export const initializeApp = () => (dispatch: AppDispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer