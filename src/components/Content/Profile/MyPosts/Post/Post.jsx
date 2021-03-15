import React from "react";
import s from './Post.module.css';
import Avatar from '../../../../Common/Avatar/Avatar';
import Message from './Message';
import Like from './Like';

const Post = (props) => {
    return (
        <article className={s.article}>
            <Avatar src={props.avatar.src} alt={props.avatar.alt}/>
            <Message post={props.post} className={s.span} id={props.id}/>
            <Like className={s.div} classNameSpan={s.span} likes={props.likes} />
        </article>
    );
}

export default Post;