import React from "react";
import User from './User/User';
import s from './FindUsers.module.css';
import * as axios from "axios";
import userAvatar from '../../../image/logo1.png';

const FindUsers = (props) => {
    debugger;
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
        });
    }

    let user = props.users.map(u => <User key={u.id}
        id={u.id}
        src={u.photos.small != null ?
            u.photos.small :
            userAvatar}
        // alt={u.avatar.alt}
        followed={u.followed}
        name={u.name}
        status={u.status}
        // city={u.location.city}
        // planet={u.location.planet}
        follow={props.follow}
        unfollow={props.unfollow} />);

    return (
        <div className={s.div}>
            {user}
        </div>
    );
}

export default FindUsers;