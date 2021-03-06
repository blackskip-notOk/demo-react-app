export enum AuthActions {
    SET_USER_DATA = 'my-app/auth/SET-USER-DATA',
    SET_ERROR_MESSAGE = 'my-app/auth/SET_ERROR_MESSAGE',
    GET_CAPTCHA_URL_SUCCESS = 'my-app/auth/GET_CAPTCHA_URL_SUCCESS',
    TOGGLE_LOGIN_PROGRESS = 'my-app/auth/TOGGLE_LOGIN_PROGRESS'
}
export enum AppActions {
    INITIALIZED_SUCCESS = 'my-app/app/INITIALIZED_SUCCESS'
}
export enum DialogsActions {
    ADD_MESSAGE = 'my-app/dialogs/ADD-MESSAGE',
    DELETE_MESSAGE = 'my-app/dialogs/DELETE_MESSAGE'
}
export enum HeaderActions {
    TOGGLE_IS_VISIBLE = 'my-app/header/TOGGLE_IS_VISIBLE',
    SET_AUTH_USER_AVATAR = 'my-app/header/SET_AUTH_USER_AVATAR'
}
export enum ProfileActions {
    ADD_POST = 'my-app/profile/ADD_POST',
    DELETE_POST = 'my-app/profile/DELETE_POST',
    SET_USER_PROFILE = 'my-app/profile/SET_USER_PROFILE',
    SET_USER_STATUS = 'my-app/profile/SET_USER_STATUS',
    SET_IS_OWNER = 'my-app/profile/SET_IS_OWNER',
    SAVE_PHOTO_SUCCESS = 'my-app/profile/SAVE_PHOTO_SUCCESS',
    SWITCH_IS_FETCHING = 'my-app/profile/SWITCH_IS_FETCHING',
    SET_PROFILE_PROPERTIES = 'my-app/profile/SET_PROFILE_PROPERTIES',
    SET_PROFILE_ERROR_MESSAGE = 'my-app/profile/SET_PROFILE_ERROR_MESSAGE',
    UPDADTE_PROFILE_SUCCESS = 'my-app/profile/UPDADTE_PROFILE_SUCCESS',
    SWITCH_IS_SETTING_MODE = 'my-app/profile/SWITCH_IS_SETTING_MODE'
}

export enum UsersActions {
    SET_REQUEST_PAGE = 'my-app/users/SET_REQUEST_PAGE',
    FOLLOW = 'my-app/users/FOLLOW',
    UNFOLLOW = 'my-app/users/UNFOLLOW',
    SET_USERS = 'my-app/users/SET_USERS',
    SET_TOTAL_COUNT = 'my-app/users/SET_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'my-app/users/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'my-app/users/TOGGLE_IS_FOLLOWING_PROGRESS'
}

export const FIND_USER = 'my-app/users/FIND_USER';

//AdditionsReducer
export const ADD_TODO = 'my-app/toDo/ADD_TODO';
export const REMOVE_TODO = 'my-app/toDo/REMOVE_TODO';
export const TOOGLE_TODO = 'my-app/toDo/TOOGLE_TODO';
export const SET_VISIBILITY_FILTER = 'my-app/toDo/SET_VISIBILITY_FILTER';
export const SHOW_ALL = 'my-app/todo/SHOW_ALL';
export const SHOW_COMPLETED = 'my-app/todo/SHOW_COMPLETED';
export const SHOW_ACTIVE = 'my-app/todo/SHOW_ACTIVE';