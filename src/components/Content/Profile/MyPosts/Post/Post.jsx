import React from "react";
import s from './Post.module.css';
import Avatar from '../../../../Common/Avatar/Avatar';
import Message from './Message';
import Like from './Like';
import userAvatar from '../../../../../image/bb-8.png';

const Post = (props) => {
    return (
        <article className={s.article}>
            <Avatar src={props.photos.small
                ? props.photos.small
                : userAvatar} alt='User Avatar'/>
            <Message post={props.post} className={s.span} id={props.id}/>
            <Like className={s.div} classNameSpan={s.span} likes={props.likes} />
        </article>
    );
}

export default Post;