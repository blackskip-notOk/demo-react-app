import { authAPI, securityApi } from "../../API/API";

const SET_USER_DATA = 'my-app/auth/SET-USER-DATA';
const SET_ERROR_MESSAGE = 'my-app/auth/SET_ERROR_MESSAGE';
const GET_CAPTCHA_URL_SUCCESS = 'my-app/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    captcha: null,
    emailErrorMessage: null,
    passwordErrorMessage: null,
    errorMessages: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR_MESSAGE:
            let getNewError = (element) => {
                switch(element.field) {
                    case 'email':
                        return {
                            emailErrorMessage: element.error
                        }
                    case 'password':
                        return {
                            passwordErrorMessage: element.error
                        }
                    default:
                        return state;
                }
            }
            let errors = action?.fieldsErrors?.map(getNewError);
           return {
                ...state,
                emailErrorMessage: errors[0].emailErrorMessage,
                passwordErrorMessage: errors[1].passwordErrorMessage,
                errorMessages: errors
            }
        default:
             return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type:  GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const setErrormessage = (fieldsErrors) => ({
    type: SET_ERROR_MESSAGE, fieldsErrors});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getAuth();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const getAuthError = () => async (dispatch) => {
    let response = await authAPI.login();

    dispatch(setErrormessage(response.fieldsErrors))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.resultCode === 1) {
        dispatch(getAuthError());
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaURL();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;