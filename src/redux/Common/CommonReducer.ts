import { IIcon, IIconHeader, ISearch } from "../../TypeScript/Interfaces/commonInterface";

const initialState = {
    iconsHeader: [
        { id: 1, pathway: '/profile/:authUserId?', icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ] as IIconHeader[],
    search: { id: 1, name: 'search', icon: 'fas fa-search'} as ISearch,
    icons: [
        { id: 0, name: 'error', icon: 'fas fa-exclamation-triangle' },
        { id: 1, name: 'job', icon: 'fas fa-thumbs-up'},
        { id: 2, name: 'job', icon: 'fas fa-thumbs-down'},
        { id: 3, name: 'photo', icon: 'fas fa-camera-retro'}
    ] as IIcon[],
    iconsPaginator: [
        { id: 1, name: 'left', icon: 'fas fa-angle-left' },
        { id: 2, name: 'right', icon: 'fas fa-angle-right' },
    ] as IIcon[],
}

export type InitialStateType = typeof initialState;

const commonReducer = (state = initialState, action: any): InitialStateType => state;

export default commonReducer;