import Messages from './Messages';
import { addMessage } from '../../../redux/MessagesPageReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.contacts,
        dialogs: state.messagesPage.dialogs,
        icons: state.common.icons,
        search: state.common.search
    };
}

export default compose(connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Messages);