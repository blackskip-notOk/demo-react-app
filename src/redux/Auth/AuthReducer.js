import { authAPI, securityApi } from "../../API/API";
import { GET_CAPTCHA_URL_SUCCESS, SET_ERROR_MESSAGE,
    SET_USER_DATA, TOGGLE_LOGIN_PROGRESS } from "../Actions/actionsTypes";
import { setAuthUserLink } from "../Navbar/NavbarReducer";

let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    loginInProgress: false,
    captcha: null,
    errorMessage: null
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captcha) => ({
    type:  GET_CAPTCHA_URL_SUCCESS, payload: {captcha}});

export const setErrormessage = (messages) => ({
    type: SET_ERROR_MESSAGE, messages});

export const toggleLoginProgress = (loginInProgress) => ({
    type: TOGGLE_LOGIN_PROGRESS, loginInProgress});

export const getAuthUserData = () => dispatch => {
    return authAPI.getAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
                dispatch(setAuthUserLink(`/profile/${id}`));
            }
        });
}

export const login = (email, password, rememberMe, captcha) => dispatch => {
    dispatch(toggleLoginProgress(true));
    return authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else if (response.resultCode === 1) {
                dispatch(setErrormessage(response.messages));
            } else if (response.resultCode === 10) {
                dispatch(getCaptchaUrl());
                dispatch(setErrormessage(response.messages));
            }
            dispatch(toggleLoginProgress(false));
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
            dispatch(getCaptchaUrlSuccess(response.url));
        });
}

export default authReducer;