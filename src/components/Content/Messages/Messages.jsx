import React from 'react';
import { Redirect } from 'react-router';
import Chat from './Chat/Chat';
import Contact from './Contact/Contact';
import Dialog from './Dialog/Dialog';
import Menu from './Menu/Menu';
import AddMessageForm from './Message/AddMessageForm';
import s from "./Messages.module.css";

const Messages = (props) => {
    let contact = props.contacts.map(c =>  <Chat
            name={c.name} id={c.id} key={c.id} avatar={c.avatar} />);

    let dialog = props.dialogs.map(d => <Dialog
            message={d.message} id={d.id} key={d.id} />);

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.container}>
            <div className={s.chats}>
                <div className={s.innerChats}>
                    <Menu icons={props.icons}
                        search={props.search} />
                    {contact}
                </div>
            </div>
            <div className={s.contact}>
                <Contact contact="active contact" data="last seen yesterday" />
            </div>
            <div className={s.dialogs}>
                {dialog}
            </div>
            <AddMessageForm addMessage={props.addMessage}
                icon={props.icons[2].icon} />
        </div>
    );
}

export default Messages;