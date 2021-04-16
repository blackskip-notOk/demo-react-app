import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { follow, requestUsers, setCurrentPage, unfollow } from '../../../redux/Users/UsersReducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalCount, getUsers } from '../../../redux/Users/UsersSelectors';
import Paginator from '../../Common/Paginator/Paginator';
import Preloader from '../../Common/Preloader/Preloader';
import User from './User/User';
import s from './User/User.module.css';

const Users = ({currentPage, pageSize, requestUsers,
    isFetching, totalCount, users, unfollow, follow,
    followingInProgress}) => {
    useEffect(() => {
        requestUsers(currentPage, pageSize)},
        [currentPage, pageSize, requestUsers]);

    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    }

    let user = users.map(u => <User key={u.id} user={u}
        unfollow={unfollow} follow={follow}
        followingInProgress={followingInProgress} />);

    return (
        <div className={s.divUsers}>
            {isFetching ? <Preloader /> : null}
            <Paginator totalCount={totalCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
            {user}
        </div>
    )
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