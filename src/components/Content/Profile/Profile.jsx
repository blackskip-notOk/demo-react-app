import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({photos, status, updateUserStatus, userId, errorIcon,
    jobIcons, posts, addPost, profile, isAuth, authUserId, isOwner,
    savePhoto, photoIcon, contactsIcons}) => {

    if (!profile) return <Preloader type='profile' />

    return (
        <div className={s.div}>
            <ProfileInfo {...profile}
                isAuth={isAuth}
                authUserId={authUserId}
                userId={userId}
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
}

export default Profile;