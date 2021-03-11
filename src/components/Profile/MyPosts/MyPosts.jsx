import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '../../Common/Button/Button';

const MyPosts = (props) => {
    let post = props.posts.map( p => <Post
        id={p.id} post={p.post} likes={p.likes}
        src={p.src} alt={p.alt} key={p.id} />
    );

    let newPostText = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={s.section}>
            <div className={s.divContainer}>
                <div>
                    <textarea
                        ref={newPostText}
                        value={props.newPostText}
                        onChange={ onPostChange }
                        placeholder="Typing here..."
                        rows='8'
                        cols='10' />
                </div>
                <Button onclick={ onAddPost }
                    className={s.divButton}
                    span="add a new post" />
            </div>
            <h1>{props.myPosts}</h1>
            {post}
        </section>
    );
}

export default MyPosts;