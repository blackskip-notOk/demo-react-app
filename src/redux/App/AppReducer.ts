import { Actions } from './../Actions/actionsTypes';
// import { INITIALIZED_SUCCESS } from "../Actions/actionsTypes";
import { getAuthUserData } from "../Auth/AuthReducer";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false as boolean
};

// interface InitializedAction {readonly type: typeof INITIALIZED_SUCCESS}
// interface AppReducer {
    // (state: InitialStateType, action: InitializedSuccessActionType): InitialStateType
// };

const appReducer = (state = initialState, action: InitializedSuccessActionType): InitialStateType => {
    switch(action.type) {
        case Actions.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
             return state;
    }
}
// interface InitializedSuccess {
    // (): {readonly type: typeof INITIALIZED_SUCCESS};
// }

type InitializedSuccessActionType = {
    readonly type: typeof Actions.INITIALIZED_SUCCESS
};

//action creator
export const initializedSuccess = (): InitializedSuccessActionType => ({type: Actions.INITIALIZED_SUCCESS});
//thunk creator
// interface InitializApp {
    // (): {readonly type: typeof INITIALIZED_SUCCESS};
// }
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;