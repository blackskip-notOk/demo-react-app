import { AuthActions } from './../Actions/actionsTypes';
import { AnyAction } from "redux";
import { authAPI, securityApi } from "../../API/API";
import {  } from "../Actions/actionsTypes";
import { AppDispatch } from '../redux-store';
import { ResultCode, ResultCodeForCaptcha } from '../../TypeScript/Enums';

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

export type InitialState = typeof initialState;

const authReducer = (state = initialState, action: AnyAction): InitialState => {
    switch(action.type) {
        case AuthActions.SET_USER_DATA:
        case AuthActions.GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case AuthActions.SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.messages[0]
            }
        case AuthActions.TOGGLE_LOGIN_PROGRESS:
            return {
                ...state,
                loginInProgress: action.loginInProgress
            }
        default:
             return state;
    }
};
//action creators
type ToggleLoginProgressAction = {
    readonly type: typeof AuthActions.TOGGLE_LOGIN_PROGRESS
    loginInProgress: boolean
};
export const toggleLoginProgress = (loginInProgress: boolean): ToggleLoginProgressAction => ({
    type: AuthActions.TOGGLE_LOGIN_PROGRESS, loginInProgress});

type SetAuthUserDataActionPayload = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};
type SetAuthUserDataAction = {
    readonly type: typeof AuthActions.SET_USER_DATA
    payload: SetAuthUserDataActionPayload
};
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataAction => ({
    type: AuthActions.SET_USER_DATA, payload: {userId, email, login, isAuth}});

type SetErrormessageAction = {
    readonly type: typeof AuthActions.SET_ERROR_MESSAGE
    messages: Array<string>
};
export const setErrormessage = (messages: Array<string>): SetErrormessageAction => ({
    type: AuthActions.SET_ERROR_MESSAGE, messages});

type GetCaptchaUrlSuccessAction = {
    readonly type: typeof AuthActions.GET_CAPTCHA_URL_SUCCESS
    payload: { captcha: string }
};
export const getCaptchaUrlSuccess = (captcha: string): GetCaptchaUrlSuccessAction => ({
    type:  AuthActions.GET_CAPTCHA_URL_SUCCESS, payload: {captcha}});
//thunk creators
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: AppDispatch) => {
    dispatch(toggleLoginProgress(true));
    const response = await authAPI.login(email, password, rememberMe, captcha);
    switch (response.resultCode) {
        case ResultCode.Success:
            dispatch(getAuthUserData());
            break;
        case ResultCode.Error:
            dispatch(setErrormessage(response.messages));
            break;
        case ResultCodeForCaptcha.CaptchaIsRequired:
            dispatch(getCaptchaUrl());
            dispatch(setErrormessage(response.messages));
            break;
        default: break;
    }
    dispatch(toggleLoginProgress(false));
}
export const getAuthUserData = () => async (dispatch: AppDispatch) => {
    const response = await authAPI.getAuth();
    if (response.resultCode === ResultCode.Success) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else if (response.resultCode === ResultCode.Error) {
        dispatch(setErrormessage(response.messages));
    }
}
type Response = {
    data: {
        resultCode: number
    }
}
export const logout = () => (dispatch: AppDispatch) => {
    return (
        authAPI.logout()
            .then(((response: Response) => {
                if (response.data.resultCode === ResultCode.Success) {
                    dispatch(setAuthUserData(null, null, null, false));
                }}
            ))
    )
}
export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const response = await securityApi.getCaptchaURL();
    dispatch(getCaptchaUrlSuccess(response.url));
}

export default authReducer