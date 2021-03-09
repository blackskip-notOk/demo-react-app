import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import img_1 from '../../image/profile-back.jpg';

const Profile = (props) => {
    return (
        <div className={s.div}>
            <ProfileInfo src={img_1} alt="bali-beach"/>
            <MyPosts myPosts="My Posts"
                posts={props.profilePage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText} />
        </div>
    );
}

export default Profile;