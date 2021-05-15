import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getAuthUserId, getIsAuth } from '../../../redux/Auth/AuthSelectors';
import { getErrorIcon, getJobIcons, getPhotoIcon } from '../../../redux/Common/CommonSelectors';
import { addPost, updateUserStatus, getProfileData, savePhoto,
    updateProfileProperties } from '../../../redux/Profile/ProfileReducer';
import { getPosts, getProfile, getStatus, getIsOwner,
    getIsFetching, getContactsIcons, getIsSettingsMode, getServerErrorMessage, getProfileInfo, getisProfileUpdate } from '../../../redux/Profile/ProfileSelectors';
import Preloader from '../../Common/Preloader/Preloader';
import Settings from '../Settings/Settings';
import Profile from './Profile';

class ProfileContainer extends Component {
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate() {
        if (!this.props.profile) {
        this.refreshProfile();
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
        return (
        this.props.isSettingsMode ?
            <Settings authUserId={this.props.authUserId}
                isFetching={this.props.isFetching}
                updateProfileProperties={this.props.updateProfileProperties}
                serverErrorMessages={this.props.serverErrorMessages}
                icon={this.props.errorIcon}
                profileInfo={this.props.profileInfo}
                isProfileUpdate={this.props.isProfileUpdate}
                profile={this.props.profile} /> :
            <>
                {this.props.isFetching && <Preloader type='profile' />}
                <Profile {...this.props.profile} {...this.props} />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        contactsIcons: getContactsIcons(state),
        errorIcon: getErrorIcon(state),
        jobIcons: getJobIcons(state),
        photoIcon: getPhotoIcon(state),
        status: getStatus(state),
        authUserId: getAuthUserId(state),
        isAuth: getIsAuth(state),
        isOwner: getIsOwner(state),
        isFetching: getIsFetching(state),
        isSettingsMode: getIsSettingsMode(state),
        serverErrorMessage: getServerErrorMessage(state),
        profileInfo: getProfileInfo(state),
        isProfileUpdate: getisProfileUpdate(state)
    };
}

export default compose(connect(mapStateToProps, {addPost, getProfileData,
    updateUserStatus, savePhoto, updateProfileProperties}), withRouter)(ProfileContainer);