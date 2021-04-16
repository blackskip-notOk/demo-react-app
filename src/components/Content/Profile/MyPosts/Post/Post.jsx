import React from "react";
import s from './Post.module.css';
import Avatar from '../../../../Common/Avatar/Avatar';
import Message from './Message';
import Like from './Like';
import userAvatar from '../../../../../image/bb-8.png';

const Post = ({photos, post, id, likes}) => {
    return (
        <article className={s.article}>
            <Avatar src={photos.small
                ? photos.small
                : userAvatar} alt='User Avatar'/>
            <Message post={post} className={s.span} id={id}/>
            <Like className={s.div} classNameSpan={s.spanLike} likes={likes} />
        </article>
    );
}

export default Post;