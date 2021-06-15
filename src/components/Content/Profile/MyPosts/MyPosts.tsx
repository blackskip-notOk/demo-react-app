import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/redux-store";
import { IPhotos } from "../../../../TypeScript/Interfaces/profileInterface";
import { createReverseListFromArray } from "../../../../utils/object-helpers";
import s from './MyPosts.module.css';
import NewPostForm from "./NewPost/NewPostForm";
import Post from './Post/Post';

type Props = {
    photos: IPhotos | undefined
    addPost: (post: string) => void
}

const MyPosts: FC<Props> = React.memo(({photos, addPost}) => {
    const isOwner = useSelector((state: AppState) => state.profile.isOwner);
    const posts = useSelector((state: AppState) => state.profile.posts);

    const post = createReverseListFromArray([...posts], Post, photos);

    return (
        <div className={s.divContainer}>
            { isOwner && <NewPostForm addPost={addPost} /> }
            <h1>My Posts:</h1>
                {post}
        </div>
    );
});

export default MyPosts;