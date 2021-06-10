import { IconHeader, ISetAuthUserAvatar, IToggleVisibility } from '../../TypeScript/Interfaces';
import { profileAPI } from '../../API/API';
import { IPhotos } from '../../TypeScript/Interfaces';
import { HeaderActions } from '../Actions/actionsTypes';
import { HeaderActionsTypes, HeaderThunk } from '../../TypeScript/Types';

const initialState = {
    iconsHeader: [
        // { id: 1, pathway: `/profile`, icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ] as IconHeader[],
    isVisible: false,
    authUserId: null as number | null,
    authUserAvatar: {} as IPhotos
}
export type InitialStateType = typeof initialState

const headerReducer = (state = initialState, action: HeaderActionsTypes): InitialStateType => {
    switch (action.type) {
        case HeaderActions.TOGGLE_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isVisible
            };
        case HeaderActions.SET_AUTH_USER_AVATAR:
            return {
                ...state,
                authUserAvatar: action.authUserAvatar
            }
        default: return state;
    }
}
//action creator
export const toggleVisibility = (isVisible: boolean): IToggleVisibility => ({
        type: HeaderActions.TOGGLE_IS_VISIBLE, isVisible})

export const setAuthUserAvatar = (authUserAvatar: IPhotos): ISetAuthUserAvatar => ({
    type: HeaderActions.SET_AUTH_USER_AVATAR, authUserAvatar});
//thunk creator
export const getAuthUserAvatar = (authUserId: number): HeaderThunk => async (dispatch) => {
    const response = await profileAPI.getUserProfile(authUserId);
    dispatch(setAuthUserAvatar(response.photos));}

export default headerReducer;