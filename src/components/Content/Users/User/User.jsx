import React from "react";
import s from './User.module.css';
import userAvatar from '../../../../image/bb-8.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../../API/API";


const User = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages= [];

    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
    }

    const follow = (id) => {
        followAPI.postFollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                props.follow(id);
            }
        });
    };

    const unfollow = (id) => {
        followAPI.deleteFollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                props.unfollow(id);
            }
        });
    }

    return (
        <div className={s.divUsers}>
            <div className={s.divPages}>
                {pages.map(p => <span onClick={() => {
                    props.onPageChanged(p)}}
                    className={props.currentPage === p
                        ? s.spanChosen : s.spanUnchosen}>
                        {p}
                    </span>
                )}
            </div>
            {props.users.map(u => <div key={u.id}
                className={s.divUser}>
                <div className={s.divName}>
                    {u.name}
                </div>
                <NavLink to={'/profile/' + u.id} className={s.link}>
                    <Avatar src={u.photos.small
                        ? u.photos.small : userAvatar}
                        className={s.img} />
                </NavLink>
                <div className={s.divLocation}>
                    {u.location ? u.location : 'No country, No city'}
                </div>
                <div className={s.divStatus}>
                    {u.status ? u.status : '"Nothing to say"'}
                </div>
                <div className={s.divFollow}>
                    {u.followed ?
                    <Button onClick={() => unfollow(u.id)}
                        span='Unfollow'
                        className={s.buttonFollow} />
                     : <Button onClick={() => follow(u.id)}
                        span='Follow'
                        className={s.buttonFollow} />
                    }
                </div>
                </div>
            )}
        </div>
    );
}

export default User;