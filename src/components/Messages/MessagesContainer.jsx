import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/MessagesPageReducer';
import StoreContext from '../../StoreContext';

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let addMessage = () => {
                    let action = addMessageActionCreator();
                    store.dispatch(action);
                };

                let messageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <Messages messagesPage={state.messagesPage}
                        addMessage={addMessage}
                        updateNewMessageText={messageChange}
                        newMessageText={state.messagesPage.newMessageText}
                        icons={state.common.icons}
                        search={state.common.search} />
                );
            }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesContainer;