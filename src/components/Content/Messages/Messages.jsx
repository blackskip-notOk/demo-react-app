import React from 'react';
import { Redirect } from 'react-router';
import { createListFromArray, createReverseListFromArray } from '../../../utils/object-helpers';
import Search from '../../Common/Search/Search';
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import AddMessageForm from './Message/AddMessageForm';
import s from "./Messages.module.css";

const Messages = ({contacts, dialogs, isAuth, icons, search,
    addMessage}) => {
    let contact = createListFromArray(contacts, Chat);
    let dialog = createReverseListFromArray([...dialogs], Dialog);

    if (!isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.container}>
            <div className={s.chats}>
                <div className={s.innerChats}>
                    <Search search={search}
                        title='Find dialog' />
                    {contact}
                </div>
            </div>
            <div className={s.dialogs}>
                {dialog}
            </div>
            <AddMessageForm addMessage={addMessage}
                icon={icons[2].icon} />
        </div>
    );
}

export default Messages;