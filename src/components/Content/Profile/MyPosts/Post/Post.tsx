import React, { FC } from "react";
import s from './Post.module.css';
import Avatar from '../../../../Common/Avatar/Avatar';
import Message from './Message';
import Like from './Like';
import userAvatar from '../../../../../image/avatars/noAvatar.png';
import { IPhotos } from "../../../../../Types/Interfaces";

type Props = {
    photos: IPhotos
    post: string
    likes: number
}

const Post: FC<Props> = ({photos, post, likes}) => {
    return (
        <article className={s.postArticle}>
            <Avatar src={photos.small
                ? photos.small
                : userAvatar}
                className={s.avatar}
                alt='User Avatar'/>
            <Message post={post} className={s.messageSpan} />
            <Like className={s.likeDiv} classNameSpan={s.likeSpan}
                likes={likes} likeIconClass={s.likeIcon} />
        </article>
    );
}

export default Post;