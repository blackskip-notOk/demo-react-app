import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    let path = `${props.src}`
    return (
        <div className={s.div}>
            <picture>
                <img className={s.img}
                    src={path}
                    alt={props.alt}
                    key={props.id} />
            </picture>
            <div className={s.divText}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;