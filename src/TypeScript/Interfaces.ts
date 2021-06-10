import { UsersActions, HeaderActions } from '../redux/Actions/actionsTypes';
import { ResultCode, ResultCodeForCaptcha } from './Enums';

//api interfases
export interface IGetAuth {
    data: {
        readonly id: number
        readonly email: string
        readonly login: string
    }
    resultCode: ResultCode
    messages: string[]
}

export interface ILogin {
    resultCode: ResultCode | ResultCodeForCaptcha
    messages: string[]
    data: {
        userId: number
    }
}

export interface ILogout {
    resultCode: ResultCode
    messages: string[]
    data: {}
}

export interface IGetUsers {
    items: IUser[]
    totalCount: number
    error: string | null
}

export interface IUnfollow {
    resultCode: ResultCode
    messages: string[]
    data: {}
}

export interface IFollow {
    resultCode: ResultCode
    messages: string[]
    data: {}
}

export interface IUpdateUserStatus {
    resultCode: ResultCode
    messages: string[]
    data: {}
}

export interface ISavePhoto {
    data: {
        small: string
        large: string
    }
    resultCode: ResultCode
    messages: string[]
}

export interface IUpdateProfileProperties {
    resultCode: ResultCode
    messages: string[]
    data: {}
}

//Security API
export interface IGetCaptchaURL {
    url: string
}

//profile
export interface IProfile {
    readonly userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: IContacts
    photos: IPhotos
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
}

export interface IPhotos {
    small: string | null
    large: string | null
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

export interface IPost {
    readonly id: number
    post: string
    likes: number
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

//common
export interface IPagesInfo {
    pageSize: number
    requestPage: number
    pages: Array<number>
    portionCount: number
    portionSize: number
}
export interface IPaginatorIcons {
    readonly prevPage: string
    readonly nextPage: string
}

//Users interfaces
//Users Reducer
export interface IFollowSuccess {
    type: typeof UsersActions.FOLLOW
    userId: number
}

export interface IUnfollowSuccess {
    type: typeof UsersActions.UNFOLLOW
    userId: number
}

export interface ISetUsers {
    type: typeof UsersActions.SET_USERS
    users: Array<IUser>
}

export interface ISetTotalCount {
    type: typeof UsersActions.SET_TOTAL_COUNT
    totalCount: number
}

export interface ISetRequestPage {
    type: typeof UsersActions.SET_REQUEST_PAGE
    currentPage: number
}

export interface IToggleIsFetching {
    type: typeof UsersActions.TOGGLE_IS_FETCHING
    isFetching: boolean
}

export interface IToggleIsFollowingProgress {
    type: typeof UsersActions.TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId: number
}

export interface IUser {
    readonly id: number
    readonly name: string
    readonly status: string | null
    readonly photos: IPhotos
    followed: boolean
}

//HeaderReducer
export interface IconHeader {
    id: number
    pathway: string
    icon: string
    undertext: string
    target: string
}

export interface IToggleVisibility {
    type: typeof HeaderActions.TOGGLE_IS_VISIBLE
    isVisible: boolean
}

export interface ISetAuthUserAvatar {
    type: typeof HeaderActions.SET_AUTH_USER_AVATAR
    authUserAvatar: IPhotos
}