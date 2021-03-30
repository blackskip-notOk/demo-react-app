import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

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
                updateUserStatus={props.updateUserStatus} />
            <MyPosts posts={props.posts}
                addPost={props.addPost}
                photos={props.profile.photos}
                icons={props.icons} />
        </div>
    );
}

export default Profile;