let initialState = {
    friends: [],
    links: [
        { id: 1, pathway: '/dialogs', target: '_self', notation: 'Dialogs' },
        { id: 2, pathway: '/friends', target: '_self', notation: 'Friends' },
        { id: 3, pathway: '/users/page=1', target: '_self', notation: 'Users'},
        { id: 4, pathway: '/additions', target: '_self', notation: 'Additions' },
        { id: 5, pathway: '/settings', target: '_self', notation: 'Settings'}
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;