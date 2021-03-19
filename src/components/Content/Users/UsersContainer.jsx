import User from './User/User';
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow,
    setTotalCount, toggleIsFetching } from '../../../redux/UsersPageReducer';
import React from 'react';
import axios from 'axios';
import Preloader from '../../Common/Preloader/Preloader';

class Users extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <User totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             let action = followAC(userId);
//             dispatch(action);
//         },
//         unfollow: (userId) => {
//             let action = unfollowAC(userId);
//             dispatch(action);
//         },
//         setUsers: (users) => {
//             let action = setUsersAC(users);
//             dispatch(action);
//         },
//         setTotalCount: (totalCount) => {
//             let action = setTotalCountAC(totalCount);
//             dispatch(action);
//         },
//         setCurrentPage: (currentPage) => {
//             let action = setCurrentPageAC(currentPage);
//             dispatch(action);
//         },
//         toggleIsFetching: (isFetching) => {
//             let action = toggleIsFetchingAC(isFetching);
//             dispatch(action);
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalCount, setCurrentPage,
    toggleIsFetching
})(Users);

export default UsersContainer;