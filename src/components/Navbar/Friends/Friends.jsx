import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../Common/Avatar/Avatar';
import s from './Friends.module.css';

const Friend = ({id, avatar}) => {
    return (
        <NavLink to={`/friends/${id}`}>
            <Avatar src={avatar.src} alt={avatar.alt}
                className={s.img} />
        </NavLink>
    );
}

export default Friend;
