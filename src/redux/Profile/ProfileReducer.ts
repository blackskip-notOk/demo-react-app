import { ProfileActionsTypes, ProfileThunk } from './../../TypeScript/Types';
import { profileAPI } from "../../API/API";
import { ProfileActions } from "../../TypeScript/Actions/actionsTypes";
import { IAddPost, IContact, IContactIcon, IDeletePost, IPhotos, IPost,
    IProfile, ISavePhotoSuccess, ISetIsOwner, ISetProfileErrormessage,
    ISetProfileProperties, ISetUserProfile, ISetUserStatus, ISwitchIsFetching,
    ISwitchIsSettingsMode, IUpdateProfileSuccess } from "../../TypeScript/Interfaces/profileInterface";
import { ResultCode } from '../../TypeScript/Enums';

const initialState = {
    profile: null as IProfile | null,
    contactsIcons: [
        { id: 1, name: 'facebook', icon: 'fab fa-facebook'},
        { id: 2, name: 'website', icon: 'fab fa-earlybirds'},
        { id: 3, name: 'vk', icon: 'fab fa-vk'},
        { id: 4, name: 'twitter', icon: 'fab fa-twitter'},
        { id: 5, name: 'instagram', icon: 'fab fa-instagram'},
        { id: 6, name: 'youtube', icon: 'fab fa-youtube'},
        { id: 7, name: 'github', icon: 'fab fa-github'},
        { id: 8, name: 'mainLink', icon: 'fab fa-react'},
    ] as IContactIcon[],
    posts: [
        { id: 1, post: "Посты находятся в разработке. В Redux-state новый пост сохранится, серверной части по постам нет.", likes: 1111 },
    ] as IPost[],
    status: '',
    isOwner: false,
    isFetching: true, //isFetching true because false create a cycle
    isProfileUpdate: false,
    errorMessage: null as string[] | null,
    isSettingsMode: false
};

export type InitialState = typeof initialState

const profileReducer = (state = initialState, action: ProfileActionsTypes): InitialState => {
    switch(action.type) {
        case ProfileActions.ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                post: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case ProfileActions.DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case ProfileActions.SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }

        }
        case ProfileActions.SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        case ProfileActions.SET_IS_OWNER: {
            return {
                ...state,
                isOwner: action.isOwner
            }
        }
        case ProfileActions.SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as IProfile
            }
        }
        case ProfileActions.SWITCH_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ProfileActions.SET_PROFILE_PROPERTIES: {
            return {
                ...state,
                profile: {...state.profile, Properties: action.Properties}  as IProfile
            }
        }
        case ProfileActions.UPDADTE_PROFILE_SUCCESS: {
            return {
                ...state,
                isProfileUpdate: action.isProfileUpdate
            }
        }
        case ProfileActions.SET_PROFILE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.messages
            }
        case ProfileActions.SWITCH_IS_SETTING_MODE:
            return {
                ...state,
                isSettingsMode: action.isSettingsMode
            }
        default:
             return state;
    }
};
//action creators
export const addPost = (newPostText: string): IAddPost => ({type: ProfileActions.ADD_POST, newPostText})

export const deletePost = (postId: number): IDeletePost => ({type: ProfileActions.DELETE_POST, postId})

export const setUserProfile = (profile: IProfile): ISetUserProfile => ({type: ProfileActions.SET_USER_PROFILE, profile})

export const setUserStatus = (status: string): ISetUserStatus => ({type: ProfileActions.SET_USER_STATUS, status})

export const savePhotoSuccess = (photos: IPhotos): ISavePhotoSuccess => ({type: ProfileActions.SAVE_PHOTO_SUCCESS, photos})

export const setIsOwner = (isOwner: boolean): ISetIsOwner => ({type: ProfileActions.SET_IS_OWNER, isOwner})

export const switchIsFetching = (isFetching: boolean): ISwitchIsFetching => ({type: ProfileActions.SWITCH_IS_FETCHING, isFetching})

export const setProfileProperties = (Properties: IProfile): ISetProfileProperties => ({type: ProfileActions.SET_PROFILE_PROPERTIES, Properties})

export const updateProfileSuccess = (isProfileUpdate: boolean): IUpdateProfileSuccess => ({type: ProfileActions.UPDADTE_PROFILE_SUCCESS, isProfileUpdate})

export const setProfileErrormessage = (messages: string[]): ISetProfileErrormessage => ({type: ProfileActions.SET_PROFILE_ERROR_MESSAGE, messages})

export const switchIsSettingsMode = (isSettingsMode: boolean): ISwitchIsSettingsMode => ({type: ProfileActions.SWITCH_IS_SETTING_MODE, isSettingsMode})
//thunk creators
export const getProfileData = (userId: number | null, authUserId: number | null): ProfileThunk => async dispatch => {
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

export const getUserProfile = (userId: number | null): ProfileThunk => async dispatch => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const updateUserStatus = (status: string): ProfileThunk => async dispatch => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const savePhoto = (file: File): ProfileThunk => async dispatch => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data));
    }
};
export const updateProfileProperties = (userId: number | null, aboutMe: string, lookingForAJob: boolean,
    lookingForAJobDescription: string, fullName: string, contacts: IContact): ProfileThunk => async dispatch => {
        dispatch(switchIsFetching(true));
    let response = await profileAPI.updateProfileProperties(userId,
        aboutMe, lookingForAJob, lookingForAJobDescription, fullName, contacts);
        dispatch(switchIsFetching(false));
    if (response.resultCode === ResultCode.Success) {
        dispatch(updateProfileSuccess(true));
    } else if (response.resultCode === ResultCode.Error) {
        dispatch(setProfileErrormessage(response.messages));
    }

    setTimeout(function() {
            dispatch(updateProfileSuccess(false));
    }, 5000);
};

export default profileReducer