import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { follow, requestUsers, setCurrentPage, unfollow } from '../../../redux/UsersPageReducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsers } from '../../../redux/UsersPageSelectors';
import Preloader from '../../Common/Preloader/Preloader';
import User from './User/User';

class Users extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
}

export default compose(connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, requestUsers}))(Users);