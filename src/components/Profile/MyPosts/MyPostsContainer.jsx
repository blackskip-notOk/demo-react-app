import React from "react";
import MyPosts from './MyPosts';
import {addPostActionCreator,
    updateNewPostTextActionCreator} from '../../../redux/ProfilePageReducer';
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer >
            { store => {
                let state = store.getState();
                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };

                let postChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <MyPosts posts={state.profilePage.posts}
                        addPost={addPost}
                        updateNewPostText={postChange}
                        newPostText={state.profilePage.newPostText}
                        myPosts="My Posts" />
                );
            }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;