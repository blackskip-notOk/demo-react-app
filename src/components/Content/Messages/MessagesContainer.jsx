import Messages from './Messages';
import { addMessage, updateNewMessageText } from '../../../redux/MessagesPageReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.contacts,
        dialogs: state.messagesPage.dialogs,
        newMessageText: state.messagesPage.newMessageText,
        icons: state.common.icons,
        search: state.common.search,
        isAuth: state.auth.isAuth,
    };
}

const MessagesContainer = connect(mapStateToProps, {
    addMessage, updateNewMessageText
})(Messages);

export default MessagesContainer;