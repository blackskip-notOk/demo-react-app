import React, { FC } from "react";
import { IContactIcon, IPhotos, IPost, IProfile } from "../../../Types/Interfaces";
import Preloader from "../../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type Props = {
    photos?: IPhotos | undefined
    status: string
    updateUserStatus: (status: string) => void
    errorIcon: string
    jobIcons: Array<string>
    posts: Array<IPost>
    addPost: (post: string) => void
    profile: IProfile | null
    isOwner: boolean
    savePhoto: (avatarSrc: File) => void
    photoIcon: string
    contactsIcons: Array<IContactIcon>
}

const Profile: FC<Props> = React.memo(({photos, status, updateUserStatus, errorIcon,
    jobIcons, posts, addPost, profile, isOwner, savePhoto,
    photoIcon, contactsIcons}) => {

    if (!profile) return <Preloader type='profile' />
    return (
        <div className={s.profileDiv}>
            <ProfileInfo {...profile}
                isOwner={isOwner}
                savePhoto={savePhoto}
                status={status}
                updateUserStatus={updateUserStatus}
                errorIcon={errorIcon}
                jobIcons={jobIcons}
                photoIcon={photoIcon}
                contactsIcons={contactsIcons} />
            <MyPosts errorIcon={errorIcon}
                posts={posts}
                addPost={addPost}
                photos={photos}
                isOwner={isOwner} />
        </div>
    );
});

export default Profile;