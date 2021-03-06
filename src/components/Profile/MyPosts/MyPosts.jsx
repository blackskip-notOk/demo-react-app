import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Textarea from '../../Common/Textarea/Textarea';
import Button from '../../Common/Button/Button';

const MyPosts = (props) => {
    let post = props.posts.map( p => <Post
        id={p.id} message={p.message} likes={p.likes}
        src={p.src} alt={p.alt} key={p.id} />
    );

    return (
        <section className={s.section}>
            <div className={s.divContainer}>
                <Textarea placeholder="Typing here..." rows='8' cols='10' />
                <Button className={s.divButton} span="add a new post" />
            </div>
            <h1>{props.myPosts}</h1>
            {post}
        </section>
    );
}

export default MyPosts;