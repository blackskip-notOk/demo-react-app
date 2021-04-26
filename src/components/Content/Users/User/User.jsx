import React from "react";
import { NavLink } from "react-router-dom";
import userAvatar from '../../../../image/bb-8.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import s from './User.module.css';

const User = ({user, followingInProgress, unfollow, follow}) => {
    let avatar = user.photos.small || userAvatar;
    return (
        <div className={s.divUser}>
            <NavLink to={`/profile/${user.id}`} className={s.link}>
                <div className={s.divName}>
                    {user.name}
                </div>
                <Avatar src={avatar} className={s.img} />
            </NavLink>
            <div className={s.divStatus}>
                {user.status ? user.status : '"Nothing to say"'}
            </div>
            <div className={s.divFollow}>
                {user.followed
                ? <Button disabled={followingInProgress
                    .some(id => id === user.id)}
                    onClick={() => unfollow(user.id)}
                    span='Unfollow' className={s.buttonFollow} />
                : <Button disabled={followingInProgress
                    .some(id => id === user.id)}
                    onClick={() => follow(user.id)}
                    span='Follow' className={s.buttonFollow} />
                }
            </div>
        </div>
    )
}

export default User;