import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../redux/redux-store';
import { IInitializedSuccess } from './Interfaces/appInterface';
import { IGetCaptchaUrlSuccess, ISetAuthUserData, ISetErrormessage, IToggleLoginProgress } from './Interfaces/authInterface';
import { IAddMessage, IDeleteMessage } from './Interfaces/dialogsInterface';
import { ISetAuthUserAvatar, IToggleVisibility } from './Interfaces/headerInterface';
import { IAddPost, IDeletePost, ISavePhotoSuccess, ISetIsOwner, ISetProfileErrormessage, ISetProfileProperties, ISetUserProfile, ISetUserStatus, ISwitchIsFetching, ISwitchIsSettingsMode, IUpdateProfileSuccess } from './Interfaces/profileInterface';
import { IFollowSuccess, ISetRequestPage, ISetTotalCount, ISetUsers, IToggleIsFetching, IToggleIsFollowingProgress, IUnfollowSuccess } from './Interfaces/usersInterface';
//root Redux Types

//AuthReducer types
export type AuthActionsTypes = IToggleLoginProgress |
    ISetAuthUserData | ISetErrormessage | IGetCaptchaUrlSuccess;

// export type AuthDispatch = Dispatch<AuthActionsTypes>

export type AuthThunk = ThunkAction<Promise<void>, AppState, unknown, AuthActionsTypes>
//AppReducer types
export type AppActionsTypes = IInitializedSuccess;

export type AppThunk = ThunkAction<Promise<void>, AppState, unknown, AppActionsTypes>
//Dialogd types
export type DialogsActionsTypes = IAddMessage | IDeleteMessage;
//HeaderReduser types
export type HeaderActionsTypes = IToggleVisibility | ISetAuthUserAvatar;
export type HeaderThunk = ThunkAction<Promise<void>, AppState, unknown, HeaderActionsTypes>;
//ProfileResucer types
export type ProfileActionsTypes = IAddPost | IDeletePost | ISetUserProfile |
    ISetUserStatus | ISavePhotoSuccess | ISetIsOwner | ISwitchIsFetching |
    ISetProfileProperties | IUpdateProfileSuccess | ISetProfileErrormessage |
    ISwitchIsSettingsMode
export type ProfileThunk = ThunkAction<Promise<void>, AppState, unknown, ProfileActionsTypes>
//UsersReducer types
export type UsersActionsTypes = IFollowSuccess | IUnfollowSuccess |
    ISetUsers | ISetTotalCount | ISetRequestPage | IToggleIsFetching |
    IToggleIsFollowingProgress;
//Users thunk types
export type UsersDispatch = Dispatch<UsersActionsTypes>
export type UsersThunk = ThunkAction<Promise<void>, AppState, unknown, UsersActionsTypes>

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