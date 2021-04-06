import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getIcons, getSearch } from '../../../redux/CommonSelectors';
import { addMessage } from '../../../redux/MessagesPageReducer';
import { getContacts, getDialogs } from '../../../redux/MessagesPageSelectors';
import Messages from './Messages';

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