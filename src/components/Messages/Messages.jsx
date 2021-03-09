import React from 'react';
import s from "./Messages.module.css";
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Button from '../Common/Button/Button';

const Messages = (props) => {
    let contact = props.messagesPage.contacts.map(c =>  <Chat
            name={c.name} id={c.id} key={c.id} avatar={c.avatar}
             />);

    let dialog = props.messagesPage.dialogs.map(d => <Dialog
            message={d.message} id={d.id} key={d.id} />);

    let newMessageText = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageText.current.value;
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
                        ref={newMessageText}
                        onChange={onMessageChange}
                        value={props.messagesPage.newMessageText}
                        placeholder="Write a message..."
                        cols='10' rows='1' />
                </div>
                <Button onclick={addMessage}
                    className={s.divButton}
                    span="Add a new Message" />
            </div>
        </div>
    );
}

export default Messages;