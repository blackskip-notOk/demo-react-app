import { profileAPI } from '../../API/API';
import { IPhotos } from '../../Types/Interfaces';
import { TOGGLE_IS_VISIBLE, SET_AUTH_USER_AVATAR } from '../Actions/actionsTypes';

type IconHeader = {
    id: number
    pathway: string
    icon: string
    undertext: string
    target: string
}
const initialState = {
    iconsHeader: [
        // { id: 1, pathway: `/profile`, icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ] as Array<IconHeader>,
    isVisible: false,
    authUserId: null as number | null,
    authUserAvatar: {} as IPhotos
}
export type InitialStateType = typeof initialState

const headerReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isVisible
            };
        case SET_AUTH_USER_AVATAR:
            return {
                ...state,
                authUserAvatar: action.authUserAvatar
            }
        default: return state;
    }
}
//action creator
type ToggleVisibilityActionType = {
    type: typeof TOGGLE_IS_VISIBLE
    isVisible: boolean
}
export const toggleVisibility = (isVisible: boolean): ToggleVisibilityActionType => ({
        type: TOGGLE_IS_VISIBLE, isVisible})

type SetAuthUserAvatarActionType = {
    type: typeof SET_AUTH_USER_AVATAR
    authUserAvatar: IPhotos
}
export const setAuthUserAvatar = (authUserAvatar: IPhotos): SetAuthUserAvatarActionType => ({
    type: SET_AUTH_USER_AVATAR, authUserAvatar});
//thunk creator
export const getAuthUserAvatar = (authUserId: number) => async (dispatch: any) => {
    const response = await profileAPI.getUserProfile(authUserId);
    dispatch(setAuthUserAvatar(response.photos));}

export default headerReducer;