import { authAPI, securityApi } from "../../API/API";
import { GET_CAPTCHA_URL_SUCCESS, SET_ERROR_MESSAGE,
    SET_USER_DATA } from "../Actions/actionsTypes";

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

export const getAuthUserData = () => dispatch => {
    return authAPI.getAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const getAuthError = () => dispatch => {
    return authAPI.login()
        .then(response => {
            dispatch(setErrormessage(response.fieldsErrors));
        });
}

export const login = (email, password, rememberMe, captcha) => dispatch => {
    return authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else if (response.resultCode === 1) {
                dispatch(getAuthError());
            } else if (response.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
        });
}

export const logout = () => dispatch => {
    return authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export const getCaptchaUrl = () => dispatch => {
    return securityApi.getCaptchaURL()
        .then(response => {
            const captchaUrl = response.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl));
        });
}

export default authReducer;