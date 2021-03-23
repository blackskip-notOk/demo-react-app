import { authAPI, usersAPI } from "../API/API";
import { setUserProfile } from "./ProfilePageReducer";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
             return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {userId, email, login} = data.data;
                    dispatch(setAuthUserData(userId, email, login));
                    usersAPI.getUserProfile(data.data.id)
                        .then(data => {
                            dispatch(setUserProfile(data));
                        });
                }
            });
    }
}

export default authReducer;