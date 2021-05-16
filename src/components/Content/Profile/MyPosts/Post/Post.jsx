import React from "react";
import s from './Post.module.css';
import Avatar from '../../../../Common/Avatar/Avatar';
import Message from './Message';
import Like from './Like';
import userAvatar from '../../../../../image/avatars/noAvatar.png';

const Post = ({photos, post, likes}) => {
    return (
        <article className={s.postArticle}>
            <Avatar src={photos.small
                ? photos.small
                : userAvatar} alt='User Avatar'/>
            <Message post={post} className={s.messageSpan} />
            <Like className={s.likeDiv} classNameSpan={s.likeSpan} likes={likes} likeIconClass={s.likeIcon} />
        </article>
    );
}

export default Post;