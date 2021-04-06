import React from "react";
import userAvatar from '../../../../image/bb-8.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Figure from "../../../Common/Figure/Figure";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Ul from "./Ul";

const ProfileInfo = (props) => {
    return (
        <div className={s.div} key={props.userId}>
            <Avatar src={props.photos.large ? props.photos.large
                : userAvatar} alt='User Avatar' className={s.avatar} />
            <span className={s.spanName}>{props.fullName}</span>
            <ProfileStatusWithHooks userId={props.userId}
                aboutMe={props.aboutMe} status={props.status}
                updateUserStatus={props.updateUserStatus}
                className={s.status} icon={props.icons[2].icon}/>
            <Ul contacts={props.contacts} className={s.ul} />
            {props.lookingForAJob
                ? <Figure className={s.job} icon={props.icons[21].icon} />
                : <Figure className={s.job} icon={props.icons[20].icon} /> }
            <span className={s.spanDesc}>
                {props.lookingForAJobDescription}
            </span>
        </div>
    );
}

export default ProfileInfo;