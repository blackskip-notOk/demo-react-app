import User from './User/User';
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow,
    setTotalCount, toggleIsFetching } from '../../../redux/UsersPageReducer';
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import { usersAPI } from '../../../API/API';

class Users extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalCount, setCurrentPage,
    toggleIsFetching})(Users);

export default UsersContainer;