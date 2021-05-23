import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getErrorIcon, getSearch } from '../../../redux/Common/CommonSelectors';
import { addMessage } from '../../../redux/Dialogs/DialogsReducer';
import { getContacts, getDialogs } from '../../../redux/Dialogs/DialogsSelectors';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        dialogs: getDialogs(state),
        icon: getErrorIcon(state),
        search: getSearch(state)
    };
}



export default compose(connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs);