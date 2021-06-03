import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import userAvatar from '../../../../image/avatars/noAvatar.png';
import { IUser } from "../../../../Types/Interfaces";
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import s from './User.module.css';

type Props = {
    followingInProgress: Array<number>
    user: IUser
    unfollow: (id: number) => Promise<void> | undefined
    follow: (id: number) => Promise<void> | undefined
}

const User: FC<Props> = React.memo(({user, followingInProgress, unfollow, follow}) => {
    let avatar = user.photos.small || userAvatar;
    return (
        <div className={s.divUser}>
            <NavLink to={`/profile/${user.id}`} className={s.nameLink}>
                <span className={s.nameSpan}>
                    {user.name}
                </span>
            </NavLink>
            <NavLink to={`/profile/${user.id}`} className={s.avatarLink}>
                <Avatar src={avatar} className={s.img} alt='User avatar' />
            </NavLink>
            <span className={s.statusSpan}>
                {user.status ? user.status : '"Nothing to say"'}
            </span>
            <div className={s.followDiv}>
                {user.followed
                ? <Button disabled={followingInProgress
                    .some(id => id === user.id)}
                    onClick={() => unfollow(user.id)}
                    span='Unfollow'
                    className={s.followButton}
                    spanClass={s.followSpan} />
                : <Button disabled={followingInProgress
                    .some(id => id === user.id)}
                    onClick={() => follow(user.id)}
                    span='Follow'
                    className={s.followButton}
                    spanClass={s.followSpan} />
                }
            </div>
        </div>
    )
})

export default User