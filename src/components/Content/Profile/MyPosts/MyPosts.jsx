import React from "react";
import { createReverseListFromArray } from "../../../../utils/object-helpers";
import s from './MyPosts.module.css';
import NewPostForm from "./NewPost/NewPostForm";
import Post from './Post/Post';

const MyPosts = React.memo(({posts, photos, addPost, errorIcon, isOwner}) => {
    let post = createReverseListFromArray([...posts], Post, photos);
    return (
        <div className={s.divContainer}>
            {isOwner && <NewPostForm addPost={addPost}
                errorIcon={errorIcon} />
            }
            <h1>My Posts:</h1>
                {post}
        </div>
    );
});

export default MyPosts;