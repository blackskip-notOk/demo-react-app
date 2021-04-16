import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.div}>
            <ProfileInfo aboutMe={props.profile.aboutMe}
                contacts={props.profile.contacts}
                lookingForAJob={props.profile.lookingForAJob}
                lookingForAJobDescription={props.profile.lookingForAJobDescription}
                fullName={props.profile.fullName}
                userId={props.profile.userId}
                photos={props.profile.photos}
                icons={props.icons}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto} />
            <MyPosts posts={props.posts}
                addPost={props.addPost}
                photos={props.profile.photos}
                icons={props.icons} />
        </div>
    );
}

export default Profile;