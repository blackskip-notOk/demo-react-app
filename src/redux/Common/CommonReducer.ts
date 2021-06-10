type  IconHeaderType = {
    id: number
    pathway: string
    icon: string
    undertext: string
    target: string
}
type SearchType = {
    id: number
    name: string
    icon: string
}
export type IconType = {
    id: number
    name: string
    icon: string
}

const initialState = {
    iconsHeader: [
        { id: 1, pathway: '/profile/:authUserId?', icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ] as Array<IconHeaderType>,
    search: { id: 1, name: 'search', icon: 'fas fa-search'} as SearchType,
    icons: [
        { id: 0, name: 'error', icon: 'fas fa-exclamation-triangle' },
        { id: 1, name: 'job', icon: 'fas fa-thumbs-up'},
        { id: 2, name: 'job', icon: 'fas fa-thumbs-down'},
        { id: 3, name: 'photo', icon: 'fas fa-camera-retro'}
    ] as Array<IconType>,
    iconsPaginator: [
        { id: 1, name: 'left', icon: 'fas fa-angle-left' },
        { id: 2, name: 'right', icon: 'fas fa-angle-right' },
    ] as Array<IconType>,
}

export type InitialStateType = typeof initialState
const commonReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default commonReducer;