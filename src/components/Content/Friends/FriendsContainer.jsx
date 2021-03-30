import Friends from './Friends';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import React from 'react';
import { compose } from 'redux';

class FriendsContainer extends React.Component {
    render() {
        return <Friends {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

export default compose(connect(mapStateToProps,{}),
    withAuthRedirect)(FriendsContainer);