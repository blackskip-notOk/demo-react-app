import React from 'react';
import Paginator from '../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.css';

const Users = React.memo(({users, unfollow, follow, followingInProgress,
    requestPage, pages, portionCount, portionSize, requestUsers,
    pageSize, paginatorIcons}) => {
    let user = users.map(u => <User key={u.id} user={u} unfollow={unfollow}
        follow={follow} followingInProgress={followingInProgress} />);
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
    );
});

export default Users;