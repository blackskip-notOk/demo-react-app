import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from "react-redux"
import { compose } from 'redux'
import { getPaginatorIcons } from '../../../redux/Common/CommonSelectors'
import { AppState } from '../../../redux/redux-store'
import { follow, requestUsers, unfollow } from '../../../redux/Users/UsersReducer'
import { getFollowingInProgress, getIsFetching, getUsers, getPagesInfo } from '../../../redux/Users/UsersSelectors'
import Preloader from '../../Common/Preloader/Preloader'
import Users from './Users'

type Props = ConnectedProps<typeof connector>

const UsersContainer: FC<Props> = React.memo(({
    requestUsers, isFetching, users, unfollow, follow,
    followingInProgress, pagesInfo, paginatorIcons}) => {
    useEffect(() => {
        requestUsers(pagesInfo.requestPage, pagesInfo.pageSize)},
        [pagesInfo.requestPage, pagesInfo.pageSize, requestUsers]);
    return (
        <>
        {isFetching && <Preloader type='app' />}
        <Users users={users}
            unfollow={unfollow}
            follow={follow}
            followingInProgress={followingInProgress}
            requestPage={pagesInfo.requestPage}
            pages={pagesInfo.pages}
            portionCount={pagesInfo.portionCount}
            portionSize={pagesInfo.portionSize}
            requestUsers={requestUsers}
            pageSize={pagesInfo.pageSize}
            paginatorIcons={paginatorIcons} />
        </>
    )
});

const mapStateToProps = (state: AppState) => {
    return {
        users: getUsers(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        pagesInfo: getPagesInfo(state),
        paginatorIcons: getPaginatorIcons(state)
    };
}
const connector = connect(mapStateToProps, {follow, unfollow, requestUsers})

export default compose(connector)(UsersContainer)