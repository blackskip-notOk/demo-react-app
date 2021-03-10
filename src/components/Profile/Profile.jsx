import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.div}>
            <ProfileInfo src={props.background.src}
                alt={props.background.alt}
                key={props.background.id}  />
            <MyPosts myPosts="My Posts"
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch = {props.dispatch} />
        </div>
    );
}

export default Profile;