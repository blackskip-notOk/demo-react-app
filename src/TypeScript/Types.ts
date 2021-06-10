import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../redux/redux-store';
import { IFollowSuccess, ISetAuthUserAvatar, ISetRequestPage, ISetTotalCount, ISetUsers, IToggleIsFetching, IToggleIsFollowingProgress, IToggleVisibility, IUnfollowSuccess, IUser } from './Interfaces';
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
export type UsersActionsTypes = IFollowSuccess | IUnfollowSuccess |
    ISetUsers | ISetTotalCount | ISetRequestPage | IToggleIsFetching |
    IToggleIsFollowingProgress;
//Users thunk types
export type UsersDispatch = Dispatch<UsersActionsTypes>
export type UsersThunk = ThunkAction<Promise<void>, AppState, unknown, UsersActionsTypes>
//HeaderReduser types
export type HeaderActionsTypes = IToggleVisibility | ISetAuthUserAvatar;
export type HeaderDispatch = Dispatch<HeaderActionsTypes>;
export type HeaderThunk = ThunkAction<Promise<void>, AppState, unknown, HeaderActionsTypes>;