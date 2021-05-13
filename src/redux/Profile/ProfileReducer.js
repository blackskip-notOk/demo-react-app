import { profileAPI } from "../../API/API";
import { ADD_POST, DELETE_POST, SAVE_PHOTO_SUCCESS, SET_IS_OWNER,
    SET_PROFILE_PROPERTIES, SET_PROFILE_ERROR_MESSAGE,
    SET_USER_PROFILE, SET_USER_STATUS, SWITCH_IS_FETCHING,
    UPDADTE_PROFILE_SUCCESS, SWITCH_IS_SETTING_MODE } from "../Actions/actionsTypes";

let initialState = {
    profile: null,
    contactsIcons: [
        { id: 1, name: 'facebook', icon: 'fab fa-facebook'},
        { id: 2, name: 'website', icon: 'fab fa-earlybirds'},
        { id: 3, name: 'vk', icon: 'fab fa-vk'},
        { id: 4, name: 'twitter', icon: 'fab fa-twitter'},
        { id: 5, name: 'instagram', icon: 'fab fa-instagram'},
        { id: 6, name: 'youtube', icon: 'fab fa-youtube'},
        { id: 7, name: 'github', icon: 'fab fa-github'},
        { id: 8, name: 'mainLink', icon: 'fab fa-react'},
    ],
    posts: [
        { id: 1, post: "Посты находятся в разработке. В Redux-state новый пост сохранится, серверной части по постам нет.", likes: 1111 },
    ],
    status: '',
    isOwner: false,
    isFetching: true, //isFetching true because false create a cycle
    isProfileUpdate: false,
    errorMessage: null,
    isSettingsMode: false
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
                profile: action.profile,
            }

        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        case SET_IS_OWNER: {
            return {
                ...state,
                isOwner: action.isOwner
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case SWITCH_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_PROFILE_PROPERTIES: {
            return {
                ...state,
                profile: {...state.profile, Properties: action.Properties}
            }
        }
        case UPDADTE_PROFILE_SUCCESS: {
            return {
                ...state,
                isProfileUpdate: action.isProfileUpdate
            }
        }
        case SET_PROFILE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.messages
            }
        case SWITCH_IS_SETTING_MODE:
            return {
                ...state,
                isSettingsMode: action.isSettingsMode
            }
        default:
             return state;
    }
};
//action creators
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setIsOwner = (isOwner) => ({type: SET_IS_OWNER, isOwner});
export const switchIsFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching});
export const setProfileProperties = (Properties) => ({type: SET_PROFILE_PROPERTIES, Properties});
export const updateProfileSuccess = (isProfileUpdate) => ({type: UPDADTE_PROFILE_SUCCESS, isProfileUpdate});
export const setProfileErrormessage = (messages) => ({type: SET_PROFILE_ERROR_MESSAGE, messages});
export const switchIsSettingsMode = (isSettingsMode) => ({type: SWITCH_IS_SETTING_MODE, isSettingsMode});
//thunk creators
export const getProfileData = (userId, authUserId) => async dispatch => {
    let promise = [profileAPI.getUserProfile(userId),
        profileAPI.getUserStatus(userId)];
    let response = await Promise.all(promise)
        dispatch(switchIsFetching(false));
        dispatch(setUserProfile(response[0]));
        dispatch(setUserStatus(response[1]));
        userId === authUserId ?
        dispatch(setIsOwner(true)) :
        dispatch(setIsOwner(false));
};

export const getUserProfile = userId => async dispatch => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
};
export const updateProfileProperties = (userId, aboutMe, lookingForAJob,
    lookingForAJobDescription, fullName, contacts) => async dispatch => {
        dispatch(switchIsFetching(true));
    let response = await profileAPI.updateProfileProperties(userId,
        aboutMe, lookingForAJob, lookingForAJobDescription, fullName, contacts);
        dispatch(switchIsFetching(false));
    if (response.resultCode === 0) {
        dispatch(updateProfileSuccess(true));
        // profileAPI.getUserProfile(userId, userId);
        // dispatch(setProfileProperties(response.data.Properties));
    } else if (response.resultCode === 1) {
        dispatch(setProfileErrormessage(response.messages));
    }

    setTimeout(function() {
            dispatch(updateProfileSuccess(false));
    }, 5000);
};

export default profileReducer;