import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '../../../Common/Button/Button';

const MyPosts = (props) => {
    let post = props.posts.map( p => <Post
        id={p.id} post={p.post} likes={p.likes}
        key={p.id} photos={props.photos}/>
    );

    let newPostText = props.newPostText;

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={s.section}>
            <div className={s.divContainer}>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={ onPostChange }
                        placeholder="Typing here..."
                        rows='8'
                        cols='10' />
                </div>
                <Button onClick={ onAddPost }
                    className={s.divButton}
                    span="add a new post" />
            </div>
            <h1>My Posts</h1>
            {post}
        </section>
    );
}

export default MyPosts;