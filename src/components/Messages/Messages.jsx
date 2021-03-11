import React from 'react';
import s from "./Messages.module.css";
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Button from '../Common/Button/Button';

const Messages = (props) => {
    let messagesPage = props.messagesPage;

    let contact = messagesPage.contacts.map(c =>  <Chat
            name={c.name} id={c.id} key={c.id} avatar={c.avatar} />);

    let dialog = messagesPage.dialogs.map(d => <Dialog
            message={d.message} id={d.id} key={d.id} />);

    let newMessageText = props.newMessageText;

    let onAddMessage = () => {
        props.addMessage()
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.container}>
            <div className={s.menu}>
                <Menu />
            </div>
            <div className={s.chats}>
                {contact}
            </div>
            <div className={s.contact}>
                <Contact contact="active contact" data="last seen yesterday" />
            </div>
            <div className={s.dialogs}>
                {dialog}
            </div>
            <div className={s.newMessage}>
                <div>
                    <textarea
                        onChange={onMessageChange}
                        value={newMessageText}
                        placeholder="Write a message..."
                        cols='10' rows='1' />
                </div>
                <Button onclick={onAddMessage}
                    className={s.divButton}
                    span="Add a new Message" />
            </div>
        </div>
    );
}

export default Messages;