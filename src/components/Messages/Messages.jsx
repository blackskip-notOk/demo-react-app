import React from 'react';
import s from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={s.container}>
            <div>
                Chats
                <div>
                    Chat
                </div>
            </div>
            <div>
                Dialog
            </div>
            <div>
                Write a message
            </div>
        </div>
    );
}

export default Messages;