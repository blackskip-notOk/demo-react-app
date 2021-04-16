import React from 'react';
import { createListFromArray } from '../../../utils/object-helpers';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friends = [];
    let friend = createListFromArray(friends, Friend);

    return (
        <div>
            {friend}
        </div>
    );
}

export default Friends;