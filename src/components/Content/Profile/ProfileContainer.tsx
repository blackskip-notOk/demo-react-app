import React, { Component } from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { getAuthUserId } from '../../../redux/Auth/AuthSelectors';
import { getErrorIcon, getJobIcons, getPhotoIcon } from '../../../redux/Common/CommonSelectors';
import { addPost, updateUserStatus, getProfileData, savePhoto,
    updateProfileProperties } from '../../../redux/Profile/ProfileReducer';
import { getPosts, getProfile, getStatus, getIsOwner,
    getIsFetching, getContactsIcons, getIsSettingsMode, getServerErrorMessage, getProfileInfo, getisProfileUpdate } from '../../../redux/Profile/ProfileSelectors';
import { AppState } from '../../../redux/redux-store';
import Preloader from '../../Common/Preloader/Preloader';
// import Settings from '../Settings/Settings';
import Profile from './Profile';

type PropsFromRedux = ConnectedProps<typeof connector>
type PathParams = {userId: string}
type PropsFromRouter = RouteComponentProps<PathParams>
type Props = PropsFromRedux & PropsFromRouter

class ProfileContainer extends Component<Props> {
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate() {
        if (!this.props.profile) {
        this.refreshProfile();
        }
    }
    refreshProfile() {
        let userId = parseInt(this.props.match.params.userId, 10) as number | null;
        if (!userId) {
            userId = this.props.authUserId;
                if (!userId) {
                    this.props.history.push('/login');
                }
        }
        this.props.getProfileData(userId, this.props.authUserId);
    }
    render() {
        // const SettingsProps = {
        //     authUserId: this.props.authUserId,
        //     isFetching: this.props.isFetching,
        //     updateProfileProperties: this.props.updateProfileProperties,
        //     serverErrorMessages: this.props.serverErrorMessage,
        //     icon: this.props.errorIcon,
        //     profileInfo: this.props.profileInfo,
        //     isProfileUpdate: this.props.isProfileUpdate,
        //     profile: this.props.profile,
        //     savePhoto: this.props.savePhoto,
        //     photoIcon: this.props.photoIcon
        // }
        return (
        // this.props.isSettingsMode ?
            // <Settings {...SettingsProps} /> :
            // authUserId={this.props.authUserId}
            //     isFetching={this.props.isFetching}
            //     updateProfileProperties={this.props.updateProfileProperties}
            //     serverErrorMessages={this.props.serverErrorMessage}
            //     icon={this.props.errorIcon}
            //     profileInfo={this.props.profileInfo}
            //     isProfileUpdate={this.props.isProfileUpdate}
            //     profile={this.props.profile}
            //     savePhoto={this.props.savePhoto}
            //     photoIcon={this.props.photoIcon} /> :
            <>
                {this.props.isFetching && <Preloader type='profile' />}
                <Profile {...this.props.profile} {...this.props} />
            </>
        )
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        contactsIcons: getContactsIcons(state),
        errorIcon: getErrorIcon(state),
        jobIcons: getJobIcons(state),
        photoIcon: getPhotoIcon(state),
        status: getStatus(state),
        authUserId: getAuthUserId(state),
        isOwner: getIsOwner(state),
        isFetching: getIsFetching(state),
        isSettingsMode: getIsSettingsMode(state),
        serverErrorMessage: getServerErrorMessage(state),
        profileInfo: getProfileInfo(state),
        isProfileUpdate: getisProfileUpdate(state)
    };
}
const connector = connect(mapStateToProps, {addPost, getProfileData,
    updateUserStatus, savePhoto, updateProfileProperties})

export default compose(connector, withRouter)(ProfileContainer);