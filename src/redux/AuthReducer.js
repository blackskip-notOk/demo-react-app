import { authAPI } from "../API/API";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    emailErrorMessage: null,
    passwordErrorMessage: null,
    errorMessages: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
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
export const setErrormessage = (fieldsErrors) => ({
    type: SET_ERROR_MESSAGE, fieldsErrors});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const getAuthError = () => (dispatch) => {
    authAPI.login().then(data => {
        dispatch(setErrormessage(data.fieldsErrors))
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else if (data.resultCode === 1) {
                dispatch(getAuthError());
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    });
}

export default authReducer;