import React from "react";
import s from './Post.module.css';
import avatar from '../../../../image/avatar.jpg';

const Post = (props) => {
    return (
        <article className={s.item}>
            <img src={avatar} alt={"avatar"} />
            {props.message}
            <div>
                <span>Like {props.like}</span>
            </div>
        </article>
    );
}

export default Post;