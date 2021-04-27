import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getAuthUserId, getIsAuth } from '../../../redux/Auth/AuthSelectors';
import { getErrorIcon, getJobIcons } from '../../../redux/Common/CommonSelectors';
import { addPost, updateUserStatus, getProfileData, savePhoto } from '../../../redux/Profile/ProfileReducer';
import { getPosts, getProfile, getStatus, getIsOwner, getIsFetching } from '../../../redux/Profile/ProfileSelectors';
import Preloader from '../../Common/Preloader/Preloader';
import Profile from './Profile';

class ProfileContainer extends Component {
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate() {
        if (!this.props.profile) {
        this.refreshProfile()
        }
    }
    refreshProfile() {
        let userId = parseInt(this.props.match.params.userId, 10);
        if (!userId) {
            userId = this.props.authUserId;
                if (!userId) {
                    this.props.history.push('/login');
                }
        }
        this.props.getProfileData(userId, this.props.authUserId);
    }
    render() {
        return(
            <>{this.props.isFetching ? <Preloader type='profile' /> : null}
            <Profile {...this.props.profile} {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        errorIcon: getErrorIcon(state),
        jobIcons: getJobIcons(state),
        status: getStatus(state),
        authUserId: getAuthUserId(state),
        isAuth: getIsAuth(state),
        isOwner: getIsOwner(state),
        isFetching: getIsFetching(state)
    };
}

export default compose(connect(mapStateToProps, {addPost, getProfileData,
    updateUserStatus, savePhoto}), withRouter)(ProfileContainer);