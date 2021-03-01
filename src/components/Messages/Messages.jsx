import React from 'react';
import s from "./Messages.module.css";
import Menu from './Menu/Menu';
// import Chat from './Chats/Chat/Chat';
import Contact from './Contact/Contact';
import contacts from './ContactList';
import { NavLink } from 'react-router-dom';
// import Dialog from './Dialog/Dialog';

const Messages = (props) => {
    return (
        <div className={s.container}>
            <div className={s.menu}>
                <Menu />
            </div>
            <div className={s.chats}>
                <div className={`${s.chat} ${s.active}`}>
                    <NavLink to="/messages/chats/1">{contacts.yoda}</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to="/messages/chats/2">{contacts.vader}</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to="/messages/chats/3">{contacts.obiWan}</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to="/messages/chats/4">{contacts.maul}</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to="/messages/chats/5">{contacts.jarJarBinks}</NavLink>
                </div>
            </div>
            <div className={s.contact}>
                <Contact contact={contacts.yoda} />
            </div>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    Если вы закончите свое обучение сейчас,
                    если вы выберете быстрый и легкий путь,
                    как сделал Вейдер, вы станете агентом зла.
                </div>
                <div className={s.dialog}>
                    Приучите себя отпускать все, что боитесь потерять
                </div>
                <div className={s.dialog}>
                    Страх потери — это путь к Темной стороне
                </div>
                <div className={s.dialog}>
                    Должен быть назван твой страх перед тем, как прогнать его
                </div>
                <div className={s.dialog}>
                    В конце концов, трусы — это те, кто следует Темной стороне
                </div>
                <div className={s.dialog}>
                    Всегда есть два, не больше, не меньше. Мастер и ученик
                </div>
            </div>
            <div className={s.message}>
                Write a message
                <button>Send a message</button>
            </div>
        </div>
    );
}

export default Messages;