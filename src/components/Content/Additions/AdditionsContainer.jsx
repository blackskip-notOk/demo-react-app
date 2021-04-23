import { connect } from 'react-redux';
import { getActive, getTodos } from '../../../redux/Additions/AdditionsSelectors';
import { toggleTodo, addTodo, getVisibility } from '../../../redux/Additions/AdditionsReducer';
import Additions from './Additions';
import { getErrorIcon } from '../../../redux/Common/CommonSelectors';

const AdditionsContainer = (props) => {
    return (
        <Additions {...props} />
    );
}
const mapStateToProps = (state, ownProps) => ({
    todos: getTodos(state),
    icon: getErrorIcon(state),
    active: getActive(state, ownProps)
});

export default connect(mapStateToProps, {
    toggleTodo, addTodo, getVisibility})(AdditionsContainer);