import { UsersActions } from "../Actions/actionsTypes";
import { IPhotos } from "./profileInterface";

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