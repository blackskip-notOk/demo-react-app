import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/redux-store';
import Paginator from '../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.css';

type Props = {
    unfollow: (id: number) => Promise<void> | undefined
    follow: (id: number) => Promise<void> | undefined
    requestUsers: (requestPage: number, pageSize: number) => void
}

const Users: FC<Props> = React.memo(({unfollow, follow, requestUsers}) => {

    //useSelect instead props
    const users = useSelector((state: AppState) => state.users.users);

    let user = users.map(u => <User key={u.id} user={u} unfollow={unfollow}
        follow={follow} />)
        return (
            <div className={s.divUsers}>
                <Paginator requestUsers={requestUsers} />
                {user}
            </div>
    )
})

export default Users