import { usersAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profile: null,
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }

        }
        default:
             return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
        }
}

export default profilePageReducer;