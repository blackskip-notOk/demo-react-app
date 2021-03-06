import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../Common/Avatar/Avatar';
import s from './Friends.module.css';

const Friend = (props) => {
    let path = `/friends/${props.id}`;

    return (
        <NavLink to={path}>
            <Avatar src={props.avatar.src} alt={props.avatar.alt}
                className={s.img} />
        </NavLink>
    );
}

export default Friend;
