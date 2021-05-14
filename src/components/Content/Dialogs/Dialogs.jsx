import React from 'react';
import { createListFromArray, createReverseListFromArray } from '../../../utils/object-helpers';
import Search from '../../Common/Search/Search';
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import AddMessageForm from './Message/AddMessageForm';
import s from "./Dialogs.module.css";

const Dialogs = ({contacts, dialogs, icon, search,
    addMessage}) => {
    let contact = createListFromArray(contacts, Chat);
    let dialog = createListFromArray(dialogs, Dialog);

    return (
        <div className={s.container}>
            <Search search={search} title='Find dialog' />
            <div className={s.chats}>
                <div className={s.innerChats}>
                    {contact}
                </div>
            </div>
            <div className={s.dialogs}>
                <div className={s.innerDialogs}>
                    {dialog}
                </div>
                <AddMessageForm addMessage={addMessage} icon={icon} />
            </div>
        </div>
    );
}

export default Dialogs;