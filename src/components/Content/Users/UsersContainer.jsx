import User from './User/User';
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalCountAC } from '../../../redux/UsersPageReducer';
import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return (
            <User totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setTotalCount: (totalCount) => {
            let action = setTotalCountAC(totalCount);
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage);
            dispatch(action);
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;