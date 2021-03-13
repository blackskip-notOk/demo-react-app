const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//origin State - before first change
let initialState = {
    name: 'Master Yoda',
    background: {id: 1, src: '../image/profile-back.jpg', alt: 'Profile background'},
    posts: [
        { id: 1, post: "Да пребудет с тобой сила.", likes: 11 },
    ],
    newPostText:'Когда девятьсот лет тебе будет...',
    avatar: {id: 1, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'},
};

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
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