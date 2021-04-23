import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({photos, isOwner, status, updateUserStatus,
    errorIcon, jobIcons, posts, addPost, profile}) => {
    if (!profile) return <Preloader />

    return (
        <div className={s.div}>
            <ProfileInfo {...profile}
                isOwner={isOwner}
                status={status}
                updateUserStatus={updateUserStatus}
                errorIcon={errorIcon}
                jobIcons={jobIcons} />
            <MyPosts errorIcon={errorIcon}
                posts={posts}
                addPost={addPost}
                photos={photos} />
        </div>
    );
}

export default Profile;