import React from 'react';
import Paginator from '../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.css';

const Users = ({users, unfollow, follow, followingInProgress,
    currentPage, pages, portionCount, portionSize, requestUsers,
    pageSize, paginatorIcons}) => {
    let user = users.map(u => <User key={u.id} user={u} unfollow={unfollow}
        follow={follow} followingInProgress={followingInProgress} />);
        return (
            <div className={s.divUsers}>
                <Paginator currentPage={currentPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestUsers={requestUsers}
                    pageSize={pageSize}
                    paginatorIcons={paginatorIcons} />
                {user}
                <Paginator currentPage={currentPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestUsers={requestUsers}
                    pageSize={pageSize}
                    paginatorIcons={paginatorIcons} />
            </div>
    );
}

export default Users;