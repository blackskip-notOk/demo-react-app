import React from 'react';
import s from './UserMessage.module.css';

const UserMessage = (props) => {
    return (
        <div className={s.div}>
            <p className={s.p}>
                Ты недооцениваешь мою мощь!
            </p>
        </div>
    );
}

export default UserMessage;