import React, { FC } from 'react';
import { IPaginatorIcons, IUser } from '../../../Types/Interfaces';
import Paginator from '../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.css';

type Props = {
    requestPage: number
    portionCount: number
    portionSize: number
    pageSize: number
    users: Array<IUser>
    pages: Array<number>
    followingInProgress: Array<number>
    paginatorIcons: IPaginatorIcons
    unfollow: (id: number) => Promise<void> | undefined
    follow: (id: number) => Promise<void> | undefined
    requestUsers: (requestPage: number, pageSize: number) => void
}

const Users: FC<Props> = React.memo(({users, unfollow, follow, followingInProgress,
    requestPage, pages, portionCount, portionSize, requestUsers,
    pageSize, paginatorIcons}) => {
    let user = users.map(u => <User key={u.id} user={u} unfollow={unfollow}
        follow={follow} followingInProgress={followingInProgress} />)
        return (
            <div className={s.divUsers}>
                <Paginator requestPage={requestPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestUsers={requestUsers}
                    pageSize={pageSize}
                    paginatorIcons={paginatorIcons} />
                {user}
                <Paginator requestPage={requestPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestUsers={requestUsers}
                    pageSize={pageSize}
                    paginatorIcons={paginatorIcons} />
            </div>
    )
})

export default Users