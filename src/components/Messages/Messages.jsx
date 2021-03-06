import React from 'react';
import s from "./Messages.module.css";
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Textarea from '../Common/Textarea/Textarea';

const Messages = (props) => {
    let contact = props.state.contacts.map(c =>  <Chat
            name={c.name} id={c.id} key={c.id} avatar={c.avatar}
             />);
debugger;
    let dialog = props.state.dialogs.map(d => <Dialog
            message={d.message} id={d.id} key={d.id} />);

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
                <Textarea
                placeholder="Write a message..."
                cols='10' rows='1' />
            </div>
        </div>
    );
}

export default Messages;