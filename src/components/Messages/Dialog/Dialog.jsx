import React from 'react';
import ContactMessage from './ContactMessge';
import UserMessage from './UserMessage';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.div}>
            <ContactMessage />
            <UserMessage />
        </div>
    );
}

export default Dialog;
