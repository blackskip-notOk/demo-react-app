let initialState = {
    iconsHeader: [
        { id: 1, pathway: '/profile/:authUserId?', icon: 'fas fa-user-circle', undertext: 'profile', target: '_self' },
        { id: 2, pathway: '/friends', icon: 'fas fa-users', undertext: 'friends', target: '_self' },
        { id: 3, pathway: '/dialogs', icon: 'fas fa-comment', undertext: 'dialogs', target: '_self' },
    ],
    search: { id: 1, icon: "fas fa-jedi", button: "fas fa-jedi", span: 'search'},
    icons: [
        { id: 0, name: 'error', icon: 'fas fa-exclamation-triangle' },
        { id: 1, name: 'job', icon: 'fas fa-user-tie'},
        { id: 2, name: 'job', icon: 'fas fa-user-slash'},
        // { id: 0, name: 'menu', icon: 'fas fa-align-justify', },
        // { id: 1, name: 'menu1', icon: 'fas fa-bars', },
        // { id: 2, name: 'danger', icon: 'fas fa-skull-crossbones', },
        // { id: 5, name: 'writeMessage', icon: 'fas fa-comment-dots', },
        // { id: 6, name: 'writeMessage1', icon: 'far fa-comment-dots', },
        // { id: 9, name: 'hamburger', icon: 'fas fa-hamburger', },
        // { id: 10, name: 'heart', icon: 'fas fa-heart', },
        // { id: 11, name: 'heart1', icon: 'far fa-heart', },
        // { id: 12, name: 'facebook', icon: 'fab fa-facebook'},
        // { id: 13, name: 'website', icon: 'fab fa-earlybirds'},
        // { id: 14, name: 'vk', icon: 'fab fa-vk'},
        // { id: 15, name: 'twitter', icon: 'fab fa-twitter'},
        // { id: 16, name: 'instagram', icon: 'fab fa-instagram'},
        // { id: 17, name: 'youtube', icon: 'fab fa-youtube'},
        // { id: 18, name: 'github', icon: 'fab fa-github'},
        // { id: 19, name: 'mainLink', icon: 'fab fa-react'}, <i class="fas fa-user-friends"></i> 'fas fa-home', <i class="fas fa-sync"></i>
        //
    ],
}

const commonReducer = (state = initialState, action) => {
    return state;
}

export default commonReducer;