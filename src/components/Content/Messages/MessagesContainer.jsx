import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getIcons, getSearch } from '../../../redux/Common/CommonSelectors';
import { addMessage } from '../../../redux/Messages/MessagesReducer';
import { getContacts, getDialogs } from '../../../redux/Messages/MessagesSelectors';
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