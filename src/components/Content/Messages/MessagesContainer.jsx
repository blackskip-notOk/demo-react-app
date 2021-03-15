import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/MessagesPageReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.contacts,
        dialogs: state.messagesPage.dialogs,
        newMessageText: state.messagesPage.newMessageText,
        icons: state.common.icons,
        search: state.common.search
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;