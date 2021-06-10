import { IPhotos, IContactIcon, IProfile, IPost, IContacts } from '../../TypeScript/Interfaces';
import { profileAPI } from "../../API/API";
import { ProfileActions } from "../Actions/actionsTypes";
import { AnyAction } from 'redux';
import { AppDispatch } from '../redux-store';

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
    ] as Array<IContactIcon>,
    posts: [
        { id: 1, post: "Посты находятся в разработке. В Redux-state новый пост сохранится, серверной части по постам нет.", likes: 1111 },
    ] as Array<IPost>,
    status: '',
    isOwner: false,
    isFetching: true, //isFetching true because false create a cycle
    isProfileUpdate: false,
    errorMessage: null as Array<string> | null,
    isSettingsMode: false
};

export type InitialState = typeof initialState

const profileReducer = (state = initialState, action: AnyAction): InitialState => {
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
type AddPostAction = {
    type: typeof ProfileActions.ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostAction => ({type: ProfileActions.ADD_POST, newPostText})

type DeletePostAction = {
    type: typeof ProfileActions.DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostAction => ({type: ProfileActions.DELETE_POST, postId})

type SetUserProfileAction = {
    type: typeof ProfileActions.SET_USER_PROFILE
    profile: IProfile
}
export const setUserProfile = (profile: IProfile): SetUserProfileAction => ({type: ProfileActions.SET_USER_PROFILE, profile})

type SetUserStatusAction = {
    type: typeof ProfileActions.SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatusAction => ({type: ProfileActions.SET_USER_STATUS, status})

type SavePhotoSuccessAction = {
    type: typeof ProfileActions.SAVE_PHOTO_SUCCESS
    photos: IPhotos
}
export const savePhotoSuccess = (photos: IPhotos): SavePhotoSuccessAction => ({type: ProfileActions.SAVE_PHOTO_SUCCESS, photos})

type SetIsOwnerAction = {
    type: typeof ProfileActions.SET_IS_OWNER
    isOwner: boolean
}
export const setIsOwner = (isOwner: boolean): SetIsOwnerAction => ({type: ProfileActions.SET_IS_OWNER, isOwner})

type SwitchIsFetchingAction = {
    type: typeof ProfileActions.SWITCH_IS_FETCHING
    isFetching: boolean
}
export const switchIsFetching = (isFetching: boolean): SwitchIsFetchingAction => ({type: ProfileActions.SWITCH_IS_FETCHING, isFetching})

type SetProfilePropertiesAction = {
    type: typeof ProfileActions.SET_PROFILE_PROPERTIES
    Properties: IProfile
}
export const setProfileProperties = (Properties: IProfile): SetProfilePropertiesAction => ({type: ProfileActions.SET_PROFILE_PROPERTIES, Properties})

type UpdateProfileSuccessAction = {
    type: typeof ProfileActions.UPDADTE_PROFILE_SUCCESS
    isProfileUpdate: boolean
}
export const updateProfileSuccess = (isProfileUpdate: boolean): UpdateProfileSuccessAction => ({type: ProfileActions.UPDADTE_PROFILE_SUCCESS, isProfileUpdate})

type SetProfileErrormessageAction = {
    type: typeof ProfileActions.SET_PROFILE_ERROR_MESSAGE
    messages: Array<string>
}
export const setProfileErrormessage = (messages: Array<string>): SetProfileErrormessageAction => ({type: ProfileActions.SET_PROFILE_ERROR_MESSAGE, messages})

type SwitchIsSettingsModeAction = {
    type: typeof ProfileActions.SWITCH_IS_SETTING_MODE
    isSettingsMode: boolean
}
export const switchIsSettingsMode = (isSettingsMode: boolean): SwitchIsSettingsModeAction => ({type: ProfileActions.SWITCH_IS_SETTING_MODE, isSettingsMode})
//thunk creators
export const getProfileData = (userId: number | null, authUserId: number | null) => async (dispatch: AppDispatch) => {
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

export const getUserProfile = (userId: number) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const updateUserStatus = (status: string) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const savePhoto = (file: any) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
};
export const updateProfileProperties = (userId: number, aboutMe: string, lookingForAJob: boolean,
    lookingForAJobDescription: string, fullName: string, contacts: IContacts) => async (dispatch: AppDispatch) => {
        dispatch(switchIsFetching(true));
    let response = await profileAPI.updateProfileProperties(userId,
        aboutMe, lookingForAJob, lookingForAJobDescription, fullName, contacts);
        dispatch(switchIsFetching(false));
    if (response.resultCode === 0) {
        dispatch(updateProfileSuccess(true));
        //it's for settings page. Need to Fix it!
        // profileAPI.getUserProfile(userId, userId);
        // dispatch(setProfileProperties(response.data.Properties));
    } else if (response.resultCode === 1) {
        dispatch(setProfileErrormessage(response.messages));
    }

    setTimeout(function() {
            dispatch(updateProfileSuccess(false));
    }, 5000);
};

export default profileReducer