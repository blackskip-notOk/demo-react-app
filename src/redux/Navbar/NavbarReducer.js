import { SET_AUTH_USER_LINK } from '../Actions/actionsTypes';

let initialState = {
    friends: [
        { id: 1, name: 'Master Yoda', avatar: {src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'} },
        { id: 2, name: 'Darth Vader', avatar: {src: '../image/avatars/vader.jpg', alt: 'Darth Vader avatar'} },
        { id: 3, name: 'Darth Maul', avatar: {src: '../image/avatars/maul.jpg', alt: 'Darth Maul avatar'} },
        { id: 4, name: 'Obi-Wan Cenobi', avatar: {src: '../image/avatars/Obiwan.jpg', alt: 'Obi-Wan Cenobi avatar'} },
        { id: 5, name: 'Jar Jar Binks', avatar: {src: '../image/avatars/Jarjarbinks.jpg', alt: 'Jar Jar Binks avatar'} }
    ],

    links: [
        { id: 2, pathway: '/dialogs', target: '_self', notation: 'Messages' },
        { id: 3, pathway: '/friends', target: '_self', notation: 'Friends' },
        { id: 4, pathway: '/additions', target: '_self', notation: 'Additions' },
        { id: 5, pathway: '/users/page=1', target: '_self', notation: 'Find Users'},
        { id: 6, pathway: '/settings', target: '_self', notation: 'Settings'}
    ],
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_LINK:
            const link = {
                id: 1,
                pathway: action.pathway,
                target: '_self',
                notation: 'Profile' }

            return {
                ...state,
                links: [link, ...state.links]
            }
        default: return state;
    }
}
//action creator
export const setAuthUserLink = (pathway) => ({type: SET_AUTH_USER_LINK, pathway});

export default navbarReducer;