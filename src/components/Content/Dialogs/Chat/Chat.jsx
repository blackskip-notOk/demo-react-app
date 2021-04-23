import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../Common/Avatar/Avatar';
import s from './Chat.module.css';

const Chat = ({id, avatar, name}) => {
    return (
        <div className={s.div}>
            <NavLink to={`/dialogs/chats/${id}`}>
                <Avatar src={avatar.src} alt={avatar.alt}
                    className={s.img} />
                <span>{id} {name}</span>
            </NavLink>
        </div>
    );
}

export default Chat;
