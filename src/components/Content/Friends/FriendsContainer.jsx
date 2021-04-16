import Friends from './Friends';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import React from 'react';
import { compose } from 'redux';

const FriendsContainer = (props) => {
    return <Friends {...props} />
}

export default compose(connect(null,{}),
    withAuthRedirect)(FriendsContainer);