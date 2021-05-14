let initialState = {
    iconsHeader: [
        { id: 1, pathway: '/profile/:authUserId?', icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ],
    search: { id: 1, icon: "fas fa-jedi", button: "fas fa-jedi", span: 'search'},
    icons: [
        { id: 0, name: 'error', icon: 'fas fa-exclamation-triangle' },
        { id: 1, name: 'job', icon: 'fas fa-thumbs-up'},
        { id: 2, name: 'job', icon: 'fas fa-thumbs-down'},
        { id: 3, name: 'photo', icon: 'fas fa-camera-retro'}
    ],
    iconsPaginator: [
        { id: 1, name: 'left', icon: 'fas fa-angle-left' },
        { id: 2, name: 'right', icon: 'fas fa-angle-right' },
    ],
        // { id: 0, name: 'menu', icon: 'fas fa-align-justify', },
        // { id: 1, name: 'menu1', icon: 'fas fa-bars', },
        // { id: 2, name: 'danger', icon: 'fas fa-skull-crossbones', },
        // { id: 5, name: 'writeMessage', icon: 'fas fa-comment-dots', },
        // { id: 6, name: 'writeMessage1', icon: 'far fa-comment-dots', },
        // { id: 9, name: 'hamburger', icon: 'fas fa-hamburger', },
        // { id: 10, name: 'heart', icon: 'fas fa-heart', },
        // { id: 11, name: 'heart1', icon: 'far fa-heart', },
}

const commonReducer = (state = initialState, action) => {
    return state;
}

export default commonReducer;