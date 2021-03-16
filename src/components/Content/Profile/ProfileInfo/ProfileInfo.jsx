import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.div}>
                <img className={s.img}
                    src={props.src}
                    alt={props.alt}
                    key={props.id} />
            <Avatar src={props.avatar.src}
                alt={props.avatar.alt}
                className={s.avatar} />
            <span className={s.span}>{props.name}</span>
        </div>
    );
}

export default ProfileInfo;