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

                src={props.background.src}
                alt={props.background.alt}
                key={props.background.id}
                avatar={props.avatar} />
            <MyPosts posts={props.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
                avatar={props.avatar} />
        </div>
    );
}

export default Profile;