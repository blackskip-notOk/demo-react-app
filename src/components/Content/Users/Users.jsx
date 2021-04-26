import React from 'react';
import Paginator from '../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.css';

const Users = ({users, unfollow, follow, followingInProgress, isFetching,
    currentPage, pages, portionCount, portionSize, requestUsers,
    pageSize}) => {
    let user = users.map(u => <User key={u.id} user={u} unfollow={unfollow}
        follow={follow} followingInProgress={followingInProgress} />);
        return (
            <div className={s.divUsers}>
                <Paginator currentPage={currentPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestUsers={requestUsers}
                    pageSize={pageSize} />
                {user}
            </div>
    );
}

export default Users;