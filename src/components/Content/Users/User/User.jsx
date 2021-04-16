import React from "react";
import { NavLink } from "react-router-dom";
import userAvatar from '../../../../image/bb-8.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import s from './User.module.css';

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.divUser}>
            <div className={s.divName}>
                {user.name}
            </div>
            <NavLink to={'/profile/' + user.id} className={s.link}>
                <Avatar src={user.photos.small
                    ? user.photos.small : userAvatar}
                    className={s.img} />
            </NavLink>
            <div className={s.divLocation}>
                {user.location ? user.location : 'No country, No city'}
            </div>
            <div className={s.divStatus}>
                {user.status ? user.status : '"Nothing to say"'}
            </div>
            <div className={s.divFollow}>
                {user.followed ?
                <Button disabled={followingInProgress
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