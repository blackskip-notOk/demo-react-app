const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    name: 'Master Yoda',
    avatar: {id: 1, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'},
    background: {id: 1, src: '../image/profile-back.jpg', alt: 'Profile background'},
    posts: [
        { id: 1, post: "Да пребудет с тобой сила.", likes: 11 },
    ],
    newPostText:'Когда девятьсот лет тебе будет...',
};

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        default:
             return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
);

export default profilePageReducer;