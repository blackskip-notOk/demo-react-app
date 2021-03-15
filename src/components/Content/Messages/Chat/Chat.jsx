import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../Common/Avatar/Avatar';
import s from './Chat.module.css';

const Chat = (props) => {
    let path = `/messages/chats/${props.id}`;

    return (
        <div className={s.div}>
            <NavLink to={path}>
                <Avatar src={props.avatar.src} alt={props.avatar.alt}
                    className={s.img} />
                <span>{props.id} {props.name}</span>
            </NavLink>
        </div>
    );
}

export default Chat;
