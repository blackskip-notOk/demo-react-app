import { authAPI, profileAPI } from "../API/API";
import { getUserProfile, setUserProfile } from "./ProfilePageReducer";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_LOGIN = 'POST_USER_LOGIN';
const DELETE_USER_LOGIN = 'DELETE_USER_LOGIN';

let initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    rememberMe: false,
    captcha: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_LOGIN:
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                captcha: true
            }
        case DELETE_USER_LOGIN: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: false
            }
        }
        default:
             return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setUserLoginData = (email, password, rememberMe) => ({
    type: SET_USER_LOGIN, email, password, rememberMe});
export const deleteUserLoginData = (email, password, rememberMe) => ({
    type: DELETE_USER_LOGIN, email, password, rememberMe});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {userId, email, login} = data.data;
                    dispatch(setAuthUserData(userId, email, login));
                    profileAPI.getUserProfile(data.data.id)
                        .then(data => {
                            dispatch(setUserProfile(data));
                        });
                }
            });
    }
}

export const setUserLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.setUserLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserProfile(data.data.userId)
                    )
                }
            }
        )
    }
}

export const deleteUserLogin = () => {
    return (dispatch) => {
        authAPI.deleteUserLogin();
    }
}

export default authReducer;