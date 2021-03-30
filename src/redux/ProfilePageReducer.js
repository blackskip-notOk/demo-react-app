import { profileAPI } from "../API/API";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    profile: null,
    posts: [
        { id: 1, post: "Да пребудет с тобой сила.", likes: 1111 },
    ],
    status: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                post: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }

        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        default:
             return state;
    }
};
//Action Creators
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => (
    {type: SET_USER_STATUS, status}
);
//Thunk functions
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export default profilePageReducer;