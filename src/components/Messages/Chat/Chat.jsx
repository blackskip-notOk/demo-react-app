import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Chat.module.css';

const Chat = (props) => {
    let path = `/messages/chats/${props.id}`;

    return (
        <div className={s.div}>
            <NavLink to={path}>
                <span>{props.contact}</span>
            </NavLink>
        </div>
    );
}

export default Chat;
