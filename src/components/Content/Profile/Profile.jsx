import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = React.memo(({photos, status, updateUserStatus, errorIcon,
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