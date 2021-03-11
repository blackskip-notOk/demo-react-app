import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/MessagesPageReducer';

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    let messageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Messages messagesPage={state.messagesPage}
            addMessage={addMessage}
            updateNewMessageText={messageChange}
            newMessageText={state.messagesPage.newMessageText} />
    );
}

export default MessagesContainer;