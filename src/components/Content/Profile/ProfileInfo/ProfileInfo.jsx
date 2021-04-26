import React from "react";
import userAvatar from '../../../../image/bb-8.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Figure from "../../../Common/Figure/Figure";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Ul from "./ProfileInfoUl/Ul";

const ProfileInfo = ({savePhoto, userId, photos, isOwner, fullName,
    aboutMe, status, updateUserStatus, contacts, errorIcon,
    lookingForAJob, lookingForAJobDescription, jobIcons}) => {

    const onUserAvatarChanged = (e) => {
        let avatarSrc = e.target.file;
        if (avatarSrc.length) {
            savePhoto(avatarSrc[0]);
        }
    }

    return (
        <div className={s.div} key={userId}>
            <Avatar src={photos.large || userAvatar} alt='User Avatar' className={s.avatar} />
            {isOwner && <input type='file'
                onChange={onUserAvatarChanged}/>}
            <span className={s.spanName}>{fullName}</span>
            <ProfileStatus userId={userId}
                aboutMe={aboutMe} status={status}
                updateUserStatus={updateUserStatus}
                className={s.status} errorIcon={errorIcon}/>
            <Ul contacts={contacts} className={s.ul} />
            {lookingForAJob
                ? <Figure className={s.job} icon={jobIcons[0]} />
                : <Figure className={s.job} icon={jobIcons[1]} /> }
            <span className={s.spanDesc}>
                {lookingForAJobDescription}
            </span>
        </div>
    );
}

export default ProfileInfo;