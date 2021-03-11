const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//origin State - before first change
let initialState = {
    background: {id: 1, src: '../image/profile-back.jpg', alt: 'Profile background'},
    posts: [
        { id: 1, post: "Да пребудет с тобой сила.", likes: 11 },
    ],
    newPostText:'Когда девятьсот лет тебе будет...',
}

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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