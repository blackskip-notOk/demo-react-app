import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.div}>
            <ProfileInfo src={props.background.src}
                alt={props.background.alt}
                key={props.background.id}
                avatar={props.avatar}
                name={props.name} />
            <MyPosts posts={props.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
                avatar={props.avatar} />
        </div>
    );
}

export default Profile;