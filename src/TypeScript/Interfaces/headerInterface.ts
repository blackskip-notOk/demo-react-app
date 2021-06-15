import { HeaderActions } from './../Actions/actionsTypes';
import { IPhotos } from './profileInterface';

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
    authUserAvatar: IPhotos | undefined
}