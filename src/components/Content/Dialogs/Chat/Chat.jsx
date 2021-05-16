import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../Common/Avatar/Avatar';
import s from './Chat.module.css';
import userAvatar from '../../../../image/avatars/noAvatar.png';

const Chat = React.memo(({id, avatar, name}) => {
    return (
        <div className={s.chatDiv}>
            <NavLink to={`/dialogs/chats/${id}`}
                className={s.chatLink}>
                <Avatar src={avatar.src || userAvatar} alt={avatar.alt}
                    className={s.img} />
                <span className={s.chatSpan}>{name}</span>
            </NavLink>
        </div>
    );
});

export default Chat;
