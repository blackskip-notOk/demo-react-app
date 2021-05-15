import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { getPaginatorIcons } from '../../../redux/Common/CommonSelectors';
import { follow, requestUsers, unfollow } from '../../../redux/Users/UsersReducer';
import { getFollowingInProgress, getIsFetching, getUsers, getPagesInfo } from '../../../redux/Users/UsersSelectors';
import Preloader from '../../Common/Preloader/Preloader';
import Users from './Users';

const UsersContainer = ({requestUsers, isFetching, users, unfollow,
    follow, followingInProgress, pagesInfo, paginatorIcons}) => {
    useEffect(() => {
        requestUsers(pagesInfo.currentPage, pagesInfo.pageSize)},
        [pagesInfo.currentPage, pagesInfo.pageSize, requestUsers]);
    return (
        <>
        {isFetching && <Preloader />}
        <Users users={users}
            unfollow={unfollow}
            follow={follow}
            followingInProgress={followingInProgress}
            isFetching={isFetching}
            currentPage={pagesInfo.currentPage}
            pages={pagesInfo.pages}
            portionCount={pagesInfo.portionCount}
            portionSize={pagesInfo.portionSize}
            requestUsers={requestUsers}
            pageSize={pagesInfo.pageSize}
            paginatorIcons={paginatorIcons} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        pagesInfo: getPagesInfo(state),
        paginatorIcons: getPaginatorIcons(state)
    };
}

export default compose(connect(mapStateToProps,
    {follow, unfollow, requestUsers}))(UsersContainer);