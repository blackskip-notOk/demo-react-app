import React from "react";
import s from './FindUsers.module.css';
import * as axios from "axios";
import userAvatar from '../../../image/bb-8.png';
import Avatar from "../../Common/Avatar/Avatar";
import Button from '../../Common/Button/Button';

class FindUsers extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div className={s.div}>
            {
                this.props.users.map(user => <div key={user.id} className={s.container}>
                    <div className={s.name}>
                        {user.name}
                    </div>
                    <Avatar src={
                        user.photos.small
                        ? user.photos.small
                        : userAvatar}
                        className={s.img} />
                    <div className={s.status}>
                        {user.status
                            ? user.status
                            : 'Nothing to say'}
                    </div>
                    <div>
                        {user.followed
                            ? <Button className={s.button}
                                span='Unfollow'
                                onClick={ () => {
                                    this.props.unfollow(user.id)
                                } } />
                            : <Button className={s.button}
                                span='Follow'
                                onClick={ () => {
                                    this.props.follow(user.id)
                                } } />
                        }
                    </div>
                </div>)
            }
            </div>
    }
}

export default FindUsers;