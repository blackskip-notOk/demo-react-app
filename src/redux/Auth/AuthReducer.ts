import { authAPI, securityApi } from "../../API/API";
import { GET_CAPTCHA_URL_SUCCESS, SET_ERROR_MESSAGE,
    SET_USER_DATA, TOGGLE_LOGIN_PROGRESS } from "../Actions/actionsTypes";

// export type InitialStateType = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     password: string | null,
//     rememberMe: boolean,
//     isAuth: boolean,
//     loginInProgress: boolean,
//     captcha: string | null,
//     errorMessage: string | null
// };

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    password: null as string | null,
    rememberMe: false,
    isAuth: false,
    loginInProgress: false,
    captcha: null as string | null,
    errorMessage: null as string | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.messages[0]
            }
        case TOGGLE_LOGIN_PROGRESS:
            return {
                ...state,
                loginInProgress: action.loginInProgress
            }
        default:
             return state;
    }
};
//action creators
type ToggleLoginProgressActionType = {
    readonly type: typeof TOGGLE_LOGIN_PROGRESS
    loginInProgress: boolean
};
export const toggleLoginProgress = (loginInProgress: boolean): ToggleLoginProgressActionType => ({
    type: TOGGLE_LOGIN_PROGRESS, loginInProgress});

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};
type SetAuthUserDataActionType = {
    readonly type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
};
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

type SetErrormessageActionType = {
    readonly type: typeof SET_ERROR_MESSAGE
    messages: Array<string>
};
export const setErrormessage = (messages: Array<string>): SetErrormessageActionType => ({
    type: SET_ERROR_MESSAGE, messages});

type GetCaptchaUrlSuccessActionType = {
    readonly type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captcha: string }
};
export const getCaptchaUrlSuccess = (captcha: string): GetCaptchaUrlSuccessActionType => ({
    type:  GET_CAPTCHA_URL_SUCCESS, payload: {captcha}});
//thunk creators
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    dispatch(toggleLoginProgress(true));
    const response = await authAPI.login(email, password, rememberMe, captcha);
    switch (response.resultCode) {
        case 0:
            dispatch(getAuthUserData());
            break;
        case 1:
            dispatch(setErrormessage(response.messages));
            break;
        case 10:
            dispatch(getCaptchaUrl());
            dispatch(setErrormessage(response.messages));
            break;
        default: break;
    }
    dispatch(toggleLoginProgress(false));
}
export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.getAuth();
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else if (response.resultCode === 1) {
        dispatch(setErrormessage(response.messages));
    }
}
type ResponseType = {
    data: {
        resultCode: number
    }
}
export const logout = () => (dispatch: any) => {
    return (
        authAPI.logout()
            .then(((response: ResponseType) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }}
            ))
    )
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = securityApi.getCaptchaURL();
    dispatch(getCaptchaUrlSuccess(response.url));
}

export default authReducer;