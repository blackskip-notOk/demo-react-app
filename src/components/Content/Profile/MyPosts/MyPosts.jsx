import React from "react";
import { createReverseListFromArray } from "../../../../utils/object-helpers";
import s from './MyPosts.module.css';
import NewPostForm from "./NewPost/NewPostForm";
import Post from './Post/Post';

const MyPosts = ({posts, photos, addPost, icon, ...props}) => {
    // let post = [...posts].reverse().map( p => <Post
    //     id={p.id} post={p.post} likes={p.likes}
    //     key={p.id} photos={photos}/>
    // );

    let post = createReverseListFromArray([...posts], Post, photos);

    return (
        <div className={s.divContainer}>
            <NewPostForm addPost={addPost}
                icon={icon} />
            <h1>My Posts:</h1>
                {post}
        </div>
    );
};

export default MyPosts;