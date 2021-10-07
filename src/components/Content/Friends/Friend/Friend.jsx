import React from 'react';
import userAvatar from '../../../../images/avatars/noAvatar.png';
import Avatar from '../../../Common/Avatar/Avatar';

const Friend = (props) => {
    return (
        <div>
            {props.friend.photo.small
            ? props.friend.photo.small
            : <Avatar src={userAvatar} />
            }
            <div>
                Friend Info
            </div>
        </div>
    )
}

export default Friend;