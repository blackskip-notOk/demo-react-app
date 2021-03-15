import FindUsers from './FindUsers';
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from '../../../redux/FindUsersPageReducer';

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;