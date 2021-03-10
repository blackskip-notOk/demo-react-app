import React from "react";
import s from './Post.module.css';
import avatar from '../../../../image/avatar_yoda.jpg';
import Avatar from '../../../Common/Avatar/Avatar';
import Message from './Message';
import Like from './Like';

const Post = (props) => {
    return (
        <article className={s.article}>
            <Avatar src={avatar} alt={props.alt}/>
            <Message post={props.post} className={s.span} id={props.id}/>
            <Like className={s.div} classNameSpan={s.span} likes={props.likes} />
        </article>
    );
}

export default Post;