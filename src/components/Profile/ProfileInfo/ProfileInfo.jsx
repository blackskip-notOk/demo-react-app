import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.div}>
            <picture>
                <img className={s.img} src={props.src} alt={props.alt} />
            </picture>
            <div className={s.divText}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;