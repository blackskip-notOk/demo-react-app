import React from 'react';
import Contact from './Contact/Contact';
import LastMessage from './Last-message/LastMessage';
import MessageCounter from './Message-counter/Counter';
import Data from './Data-time/Data';
import s from './Chat.module.css';
import contacts from '../../ContactList.js';

const Chat = (props) => {
    return (
        <div className={s.div}>
            <Contact contact={contacts.yoda} />
            <LastMessage />
            <MessageCounter />
            <Data />
        </div>
    );
}

export default Chat;
