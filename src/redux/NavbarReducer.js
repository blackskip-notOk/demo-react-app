let initialState = {
    friends: [
        { id: 1, name: 'Master Yoda', avatar: {src: '', alt: 'Master Yoda avatar'} },
        { id: 2, name: 'Darth Vader', avatar: {src: '', alt: 'Darth Vader avatar'} },
        { id: 3, name: 'Darth Maul', avatar: {src: '', alt: 'Darth Maul avatar'} },
        { id: 4, name: 'Obi-Wan Cenobi', avatar: {src: '', alt: 'Obi-Wan Cenobi avatar'} },
        { id: 5, name: 'Jar Jar Binks', avatar: {src: '', alt: 'Jar Jar Binks avatar'} }
    ],

    links: [
        { id: 1, pathway: '/profile', target: '_self', notation: 'Profile' },
        { id: 2, pathway: '/messages', target: '_self', notation: 'Messages' },
        { id: 3, pathway: '/friends', target: '_self', notation: 'Friends' },
        { id: 4, pathway: '/news', target: '_self', notation: 'News' },
    ],
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;