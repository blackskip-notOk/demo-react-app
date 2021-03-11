import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.div}>
            <ProfileInfo src={props.background.src}
                alt={props.background.alt}
                key={props.background.id}  />
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;