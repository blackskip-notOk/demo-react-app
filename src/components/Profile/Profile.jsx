import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.div}>
            <ProfileInfo src={props.profilePage.background.src}
                alt={props.profilePage.background.alt}
                key={props.profilePage.background.id}
                avatar={props.profilePage.avatar}
                name={props.profilePage.name} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;