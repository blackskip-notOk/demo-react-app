import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import Figure from "../../../Common/Figure/Figure";
import s from './ProfileInfo.module.css';
import Ul from "./Ul";

const ProfileInfo = (props) => {
    return (
        <div className={s.div} key={props.userId}>
            <Avatar src={props.photos.large}
                alt='User Avatar'
                className={s.avatar} />
            <span className={s.spanName}>{props.fullName}</span>
            <span className={s.spanAbout}>{props.aboutMe}</span>
            <Ul contacts={props.contacts} className={s.ul}
                icons={props.icons} figure={s.figure} />
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