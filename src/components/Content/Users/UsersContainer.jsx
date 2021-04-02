import User from './User/User';
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, getUsers } from '../../../redux/UsersPageReducer';
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress} />
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
}

export default compose(connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers}))(Users);