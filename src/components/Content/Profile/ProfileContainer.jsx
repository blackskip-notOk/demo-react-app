import Profile from './Profile';
import {addPost, getUserProfile, getUserStatus,
    updateUserStatus} from '../../../redux/ProfilePageReducer';
import { connect } from "react-redux";
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getPosts, getProfile, getStatus } from '../../../redux/ProfilePageSelectors';
import { getIcons } from '../../../redux/CommonSelectors';
import { getAuthUserId, getIsAuth } from '../../../redux/AuthSelectors';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        icons: getIcons(state),
        status: getStatus(state),
        authUserId: getAuthUserId(state),
        isAuth: getIsAuth(state)
    };
}

export default compose(connect(mapStateToProps,
    {addPost, getUserProfile, getUserStatus,
        updateUserStatus}),
    withRouter)(ProfileContainer);