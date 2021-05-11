import { profileAPI } from "../../API/API";
import { ADD_POST, DELETE_POST, SAVE_PHOTO_SUCCESS, SET_IS_OWNER,
    SET_USER_PROFILE, SET_USER_STATUS, SWITCH_IS_FETCHING} from "../Actions/actionsTypes";

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
    isFetching: true
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
//thunk creators
export const getProfileData = (userId, authUserId) => async dispatch => {
    let promise = [profileAPI.getUserProfile(userId, authUserId),
        profileAPI.getUserStatus(userId)];
    let response = await Promise.all(promise)
        dispatch(switchIsFetching(false));
        dispatch(setUserProfile(response[0]));
        dispatch(setUserStatus(response[1]));
        userId === authUserId ?
        dispatch(setIsOwner(true)) :
        dispatch(setIsOwner(false));
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