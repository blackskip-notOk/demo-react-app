import { AuthActions } from '../../TypeScript/Actions/actionsTypes';
import { authAPI, securityApi } from "../../API/API";
import {  } from "../../TypeScript/Actions/actionsTypes";
import { ResultCode, ResultCodeForCaptcha } from '../../TypeScript/Enums';
import { AuthActionsTypes, AuthThunk } from '../../TypeScript/Types';
import { IGetCaptchaUrlSuccess, ISetAuthUserData, ISetErrormessage, IToggleLoginProgress } from '../../TypeScript/Interfaces/authInterface';

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

type InitialState = typeof initialState;

const authReducer = (state = initialState, action: AuthActionsTypes): InitialState => {
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
export const toggleLoginProgress = (loginInProgress: boolean): IToggleLoginProgress => ({
    type: AuthActions.TOGGLE_LOGIN_PROGRESS, loginInProgress});

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): ISetAuthUserData => ({
    type: AuthActions.SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const setErrormessage = (messages: string[]): ISetErrormessage => ({
    type: AuthActions.SET_ERROR_MESSAGE, messages});

export const getCaptchaUrlSuccess = (captcha: string): IGetCaptchaUrlSuccess => ({
    type:  AuthActions.GET_CAPTCHA_URL_SUCCESS, payload: {captcha}});
//thunk creators
export const getAuthUserData = (): AuthThunk => async dispatch => {
    const response = await authAPI.getAuth();
    if (response.resultCode === ResultCode.Success) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else if (response.resultCode === ResultCode.Error) {
        dispatch(setErrormessage(response.messages));
    }
}

export const getCaptchaUrl = (): AuthThunk => async dispatch => {
    const response = await securityApi.getCaptchaURL();
    dispatch(getCaptchaUrlSuccess(response.url));
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AuthThunk => async dispatch => {
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

export const logout = (): AuthThunk => async dispatch => {
    const response = await authAPI.logout();
    if (response.resultCode === ResultCode.Success) {
        dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer