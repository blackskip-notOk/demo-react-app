import Messages from './Messages';
import { addMessage } from '../../../redux/MessagesPageReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getContacts, getDialogs } from '../../../redux/MessagesPageSelectors';
import { getIcons, getSearch } from '../../../redux/CommonSelectors';

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        dialogs: getDialogs(state),
        icons: getIcons(state),
        search: getSearch(state)
    };
}

export default compose(connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Messages);