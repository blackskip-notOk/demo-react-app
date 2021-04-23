let initialState = {
    iconsHeader: [
        { id: 1, pathway: '/home', icon: 'fab fa-galactic-republic', undertext: 'Home', target: '_self' },
        { id: 2, pathway: '/groups', icon: 'fab fa-old-republic', undertext: 'Groups', target: '_self' },
        { id: 3, pathway: '/video', icon: 'fab fa-jedi-order', undertext: 'Video', target: '_self' },
    ],
    search: { id: 1, icon: "fas fa-jedi", button: "fas fa-jedi", span: 'search'},
    // logo: { id: 1, src: '../../public/image/logo.png', alt: "site-logo"},
    icons: [
        { id: 0, name: 'menu', icon: 'fas fa-align-justify', },
        { id: 1, name: 'menu1', icon: 'fas fa-bars', },
        { id: 2, name: 'error', icon: 'fas fa-skull-crossbones', },
        { id: 3, name: 'message', icon: 'fas fa-comment', },
        { id: 4, name: 'message1', icon: 'far fa-comment', },
        { id: 5, name: 'writeMessage', icon: 'fas fa-comment-dots', },
        { id: 6, name: 'writeMessage1', icon: 'far fa-comment-dots', },
        { id: 7, name: 'dialog', icon: 'fas fa-comments', },
        { id: 8, name: 'dialog1', icon: 'far fa-comments', },
        { id: 9, name: 'hamburger', icon: 'fas fa-hamburger', },
        { id: 10, name: 'heart', icon: 'fas fa-heart', },
        { id: 11, name: 'heart1', icon: 'far fa-heart', },
        { id: 12, name: 'facebook', icon: 'fab fa-facebook'},
        { id: 13, name: 'website', icon: 'fab fa-earlybirds'},
        { id: 14, name: 'vk', icon: 'fab fa-vk'},
        { id: 15, name: 'twitter', icon: 'fab fa-twitter'},
        { id: 16, name: 'instagram', icon: 'fab fa-instagram'},
        { id: 17, name: 'youtube', icon: 'fab fa-youtube'},
        { id: 18, name: 'github', icon: 'fab fa-github'},
        { id: 19, name: 'mainLink', icon: 'fab fa-react'},
        { id: 20, name: 'job', icon: 'fas fa-user-tie'},
        { id: 21, name: 'job', icon: 'fas fa-user-slash'},
    ],
}

const commonReducer = (state = initialState, action) => {
    return state;
}

export default commonReducer;