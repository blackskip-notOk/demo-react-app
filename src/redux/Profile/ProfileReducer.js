import { profileAPI } from "../../API/API";

const ADD_POST = 'my-app/profile/ADD_POST';
const DELETE_POST = 'my-app/profile/DELETE_POST';
const SET_USER_PROFILE = 'my-app/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'my-app/profile/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'my-app/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    profile: null,
    posts: [
        { id: 1, post: "Да пребудет с тобой сила.", likes: 1111 },
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}

            }
        }

        default:
             return state;
    }
};
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => (
    {type: SET_USER_STATUS, status}
);
export const savePhotoSuccess = (photos) => (
    {type: SAVE_PHOTO_SUCCESS, photos}
);
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);

    dispatch(setUserProfile(response));
};
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);

    dispatch(setUserStatus(response.data));
};
export const updateUserStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateUserStatus(status);

        if (response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
    catch(error) {
        // dispatch error action
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export default profileReducer;