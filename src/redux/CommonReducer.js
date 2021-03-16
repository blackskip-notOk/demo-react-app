let initialState = {
    iconsHeader: [
        { id: 1, pathway: '/home', icon: 'fab fa-galactic-republic', undertext: 'Home', target: '_self' },
        { id: 2, pathway: '/groups', icon: 'fab fa-old-republic', undertext: 'Groups', target: '_self' },
        { id: 3, pathway: '/video', icon: 'fab fa-jedi-order', undertext: 'Video', target: '_self' },
        { id: 4, pathway: '/notifications', icon: 'fab fa-galactic-senate', undertext: 'Notifications', target: '_self' },
    ],
    search: { id: 1, icon: "fas fa-jedi", button: "fas fa-jedi", span: 'search'},
    logo: { id: 1, src: '../image/jedi1.png', alt: "site-logo"},
    icons: [
        { id: 1, pathway: 'menu', icon: 'fas fa-align-justify', },
        { id: 2, pathway: 'menu1', icon: 'fas fa-bars', },
        { id: 3, pathway: 'menu2', icon: '', },
        { id: 4, pathway: 'message', icon: 'fas fa-comment', },
        { id: 5, pathway: 'message1', icon: 'far fa-comment', },
        { id: 6, pathway: 'writeMessage', icon: 'fas fa-comment-dots', },
        { id: 7, pathway: 'writeMessage1', icon: 'far fa-comment-dots', },
        { id: 8, pathway: 'dialog', icon: 'fas fa-comments', },
        { id: 9, pathway: 'dialog1', icon: 'far fa-comments', },
        { id: 10, pathway: 'hamburger', icon: 'fas fa-hamburger', },
        { id: 11, pathway: 'heart', icon: 'fas fa-heart', },
        { id: 12, pathway: 'heart1', icon: 'far fa-heart', },
    ],
    avatars: [
        {id: 1, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'},
        {id: 2, src: '../image/avatars/vader.jpg', alt: 'Darth Vader avatar'},
        {id: 3, src: '../image/avatars/maul.jpg', alt: 'Darth Maul avatar'},
        {id: 4, src: '../image/avatars/Obiwan.jpg', alt: 'Obi-Wan Cenobi avatar'},
        {id: 5, src: '../image/avatars/Jarjarbinks.jpg', alt: 'Jar Jar Binks avatar'},
    ],
}

const commonReducer = (state = initialState, action) => {
    return state;
}

export default commonReducer;