import { profileAPI } from "../../API/API";
import { PhotosType } from "../../Types/Types";
import { ADD_POST, DELETE_POST, SAVE_PHOTO_SUCCESS, SET_IS_OWNER,
    SET_PROFILE_PROPERTIES, SET_PROFILE_ERROR_MESSAGE,
    SET_USER_PROFILE, SET_USER_STATUS, SWITCH_IS_FETCHING,
    UPDADTE_PROFILE_SUCCESS, SWITCH_IS_SETTING_MODE } from "../Actions/actionsTypes";

type ProfileType = {
    readonly userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

type ContactIconType = {
    id: number
    name: string
    icon: string
}
type PostType = {
    id: number
    post: string
    likes: number
}
const initialState = {
    profile: null as ProfileType | null,
    contactsIcons: [
        { id: 1, name: 'facebook', icon: 'fab fa-facebook'},
        { id: 2, name: 'website', icon: 'fab fa-earlybirds'},
        { id: 3, name: 'vk', icon: 'fab fa-vk'},
        { id: 4, name: 'twitter', icon: 'fab fa-twitter'},
        { id: 5, name: 'instagram', icon: 'fab fa-instagram'},
        { id: 6, name: 'youtube', icon: 'fab fa-youtube'},
        { id: 7, name: 'github', icon: 'fab fa-github'},
        { id: 8, name: 'mainLink', icon: 'fab fa-react'},
    ] as Array<ContactIconType>,
    posts: [
        { id: 1, post: "Посты находятся в разработке. В Redux-state новый пост сохранится, серверной части по постам нет.", likes: 1111 },
    ] as Array<PostType>,
    status: '',
    isOwner: false,
    isFetching: true, //isFetching true because false create a cycle
    isProfileUpdate: false,
    errorMessage: null as string | null,
    isSettingsMode: false
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_POST: {
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
                profile: {...state.profile, photos: action.photos} as ProfileType
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
                profile: {...state.profile, Properties: action.Properties}  as ProfileType
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
type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_USER_STATUS, status})

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

type SetIsOwnerActionType = {
    type: typeof SET_IS_OWNER
    isOwner: boolean
}
export const setIsOwner = (isOwner: boolean): SetIsOwnerActionType => ({type: SET_IS_OWNER, isOwner})

type SwitchIsFetchingActionType = {
    type: typeof SWITCH_IS_FETCHING
    isFetching: boolean
}
export const switchIsFetching = (isFetching: boolean): SwitchIsFetchingActionType => ({type: SWITCH_IS_FETCHING, isFetching})

type SetProfilePropertiesActionType = {
    type: typeof SET_PROFILE_PROPERTIES
    Properties: ProfileType
}
export const setProfileProperties = (Properties: ProfileType): SetProfilePropertiesActionType => ({type: SET_PROFILE_PROPERTIES, Properties})

type UpdateProfileSuccessActionType = {
    type: typeof UPDADTE_PROFILE_SUCCESS
    isProfileUpdate: boolean
}
export const updateProfileSuccess = (isProfileUpdate: boolean): UpdateProfileSuccessActionType => ({type: UPDADTE_PROFILE_SUCCESS, isProfileUpdate})

type SetProfileErrormessageActionType = {
    type: typeof SET_PROFILE_ERROR_MESSAGE
    messages: Array<string>
}
export const setProfileErrormessage = (messages: Array<string>): SetProfileErrormessageActionType => ({type: SET_PROFILE_ERROR_MESSAGE, messages})

type SwitchIsSettingsModeActionType = {
    type: typeof SWITCH_IS_SETTING_MODE
    isSettingsMode: boolean
}
export const switchIsSettingsMode = (isSettingsMode: boolean): SwitchIsSettingsModeActionType => ({type: SWITCH_IS_SETTING_MODE, isSettingsMode})
//thunk creators
export const getProfileData = (userId: number, authUserId: number) => async (dispatch: any) => {
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

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
};
export const updateProfileProperties = (userId: number, aboutMe: string, lookingForAJob: boolean,
    lookingForAJobDescription: string, fullName: string, contacts: ContactsType) => async (dispatch: any) => {
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

export default profileReducer;