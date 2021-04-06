import React from "react";
import s from './MyPosts.module.css';
import NewPostForm from "./NewPost/NewPostForm";
import Post from './Post/Post';

const MyPosts = React.memo((props) => {
    console.log('repsdg');
    let post = props.posts.map( p => <Post
        id={p.id} post={p.post} likes={p.likes}
        key={p.id} photos={props.photos}/>
    );

    return (
        <div className={s.divContainer}>
            <NewPostForm addPost={props.addPost}
                icon={props.icons[2].icon} />
            <h1>My Posts:</h1>
                {post}
        </div>
    );
});

export default MyPosts;