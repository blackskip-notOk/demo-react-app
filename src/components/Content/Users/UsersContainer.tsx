import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps, useSelector } from "react-redux"
import { compose } from 'redux'
import { AppState } from '../../../redux/redux-store'
import { follow, requestUsers, unfollow } from '../../../redux/Users/UsersReducer'
import { getPagesInfo } from '../../../redux/Users/UsersSelectors'
import Preloader from '../../Common/Preloader/Preloader'
import Users from './Users'

type Props = ConnectedProps<typeof connector>

const UsersContainer: FC<Props> = React.memo(({
    requestUsers, unfollow, follow}) => {

    //pageInfo wuth useSelector hook
    const pagesInfo = useSelector(getPagesInfo);
    const { pageSize, requestPage } = pagesInfo;

    useEffect(() => {
        requestUsers(requestPage, pageSize)},
        [requestPage, pageSize, requestUsers]);

        //try to use hooks instead of connect HOC
        const isFetching = useSelector((state: AppState) => state.users.isFetching);
    return (
        <>
        {isFetching && <Preloader type='app' />}
        <Users unfollow={unfollow} follow={follow} requestUsers={requestUsers} />
        </>
    )
});

const connector = connect(null, {follow, unfollow, requestUsers})

export default compose(connector)(UsersContainer)