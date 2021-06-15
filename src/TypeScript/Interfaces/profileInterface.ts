import { ProfileActions } from "../Actions/actionsTypes"

export interface IProfile {
    readonly userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: IContacts
    photos: IPhotos | undefined
}

export interface IContactIcon {
    readonly id: number
    readonly name: string
    readonly icon: string
}

export interface IContact {
    link: string
    notation: string
    icon: string
}

export interface IContacts {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
    icons?: IContactIcon[]
}

export interface IPhotos {
    small: string | null
    large: string | null
}

export interface IPost {
    readonly id: number
    post: string
    likes: number
}

export interface IAddPost {
    type: typeof ProfileActions.ADD_POST
    newPostText: string
}

export interface IDeletePost {
    type: typeof ProfileActions.DELETE_POST
    postId: number
}

export interface ISetUserProfile {
    type: typeof ProfileActions.SET_USER_PROFILE
    profile: IProfile
}

export interface ISetUserStatus {
    type: typeof ProfileActions.SET_USER_STATUS
    status: string
}

export interface ISavePhotoSuccess {
    type: typeof ProfileActions.SAVE_PHOTO_SUCCESS
    photos: IPhotos
}

export interface ISetIsOwner {
    type: typeof ProfileActions.SET_IS_OWNER
    isOwner: boolean
}

export interface ISwitchIsFetching {
    type: typeof ProfileActions.SWITCH_IS_FETCHING
    isFetching: boolean
}

export interface ISetProfileProperties {
    type: typeof ProfileActions.SET_PROFILE_PROPERTIES
    Properties: IProfile
}

export interface IUpdateProfileSuccess {
    type: typeof ProfileActions.UPDADTE_PROFILE_SUCCESS
    isProfileUpdate: boolean
}

export interface ISetProfileErrormessage {
    type: typeof ProfileActions.SET_PROFILE_ERROR_MESSAGE
    messages: string[]
}

export interface ISwitchIsSettingsMode {
    type: typeof ProfileActions.SWITCH_IS_SETTING_MODE
    isSettingsMode: boolean
}

export interface IProfileInfo {
    aboutMe: string
    jobDescription: string
    fullName: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}