import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../redux/redux-store';
import { UsersActions } from './../redux/Actions/actionsTypes';
import { IUser } from './Interfaces';
//root Redux Types

//Navbar Types
export type FriendType = {
    id: number,
    fullname: string
}

export type LinkType = {
    id: number
    pathway: string
    target: string
    notation:string
}

//UsersReducer types
//Users action types
export type UsersActionsTypes = FollowSuccessAction | UnfollowSuccessAction |
    SetUsersAction | SetTotalCountAction | SetRequestPageAction |
    ToggleIsFetchingAction | ToggleIsFollowingProgressAction;

export type FollowSuccessAction = {
    type: typeof UsersActions.FOLLOW
    userId: number
}

export type UnfollowSuccessAction = {
    type: typeof UsersActions.UNFOLLOW
    userId: number
}

export type SetUsersAction = {
    type: typeof UsersActions.SET_USERS
    users: Array<IUser>
}

export type SetTotalCountAction = {
    type: typeof UsersActions.SET_TOTAL_COUNT
    totalCount: number
}

export type SetRequestPageAction = {
    type: typeof UsersActions.SET_REQUEST_PAGE
    currentPage: number
}

export type ToggleIsFetchingAction = {
    type: typeof UsersActions.TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type ToggleIsFollowingProgressAction = {
    type: typeof UsersActions.TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId: number
}
//Users thunk types
export type UsersDispatch = Dispatch<UsersActionsTypes>

export type UsersThunk = ThunkAction<Promise<void>, AppState, unknown, UsersActionsTypes>