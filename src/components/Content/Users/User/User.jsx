import React from "react";
import s from './User.module.css';
import userAvatar from '../../../../image/bb-8.png';
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import { NavLink } from "react-router-dom";


const User = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages= [];

    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
    }

    return (
        <div className={s.divUsers}>
            <div className={s.divPages}>
                {pages.map(p =>
                    <span onClick={ () => {props.onPageChanged(p)} }
                        className={props.currentPage === p
                        ? s.spanChosen : s.spanUnchosen}>
                        {p}
                    </span>
                )}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={s.divUser}>
                    <div className={s.divName}>
                        {u.name}
                    </div>
                    <NavLink to={'/profile/' + u.id}
                        className={s.link}>
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
                        {u.followed
                            ? <Button className={s.button}
                            span='Unfollow'
                            onClick={ () => {props.unfollow(u.id)} } />
                            : <Button className={s.button}
                            span='Follow'
                            onClick={ () => {props.follow(u.id)} } />
                        }
                    </div>
                </div>)
            }
        </div>
    );
}

export default User;