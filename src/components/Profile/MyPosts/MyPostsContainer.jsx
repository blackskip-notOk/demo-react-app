import React from "react";
import MyPosts from './MyPosts';
import {addPostActionCreator,
    updateNewPostTextActionCreator} from '../../../redux/ProfilePageReducer';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let postChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts posts={state.profilePage.posts}
            addPost={addPost}
            updateNewPostText={postChange}
            newPostText={state.profilePage.newPostText}
            myPosts="My Posts" />
    );
}

export default MyPostsContainer;